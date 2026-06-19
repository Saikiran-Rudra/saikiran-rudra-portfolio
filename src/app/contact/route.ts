import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields (name, email, message) are required." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        { success: false, message: "Web3Forms access key is not configured." },
        { status: 500 }
      );
    }

    // Forward the request to Web3Forms from the server
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: `New Portfolio Message from ${name}`,
        from_name: "Portfolio Contact Form",
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, message: data.message || "Failed to submit form." },
      { status: response.status }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { success: false, message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
