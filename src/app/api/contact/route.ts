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

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { success: false, message: "Resend API key is not configured." },
        { status: 500 }
      );
    }

    // Call Resend REST API to send the email
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "saikiranrudra31@gmail.com",
        subject: `New Message from ${name} via Portfolio`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #3b82f6; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Portfolio Submission</h2>
            <p style="margin: 15px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 15px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 15px 0; font-weight: bold;">Message:</p>
            <div style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #3b82f6; border-radius: 4px; font-style: italic; white-space: pre-wrap; color: #374151;">
              ${message}
            </div>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0 15px 0;" />
            <p style="font-size: 11px; color: #9ca3af; text-align: center;">Sent from your Next.js Portfolio Contact Form</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (response.ok && data.id) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, message: data.message || "Failed to send email." },
      { status: response.status }
    );
  } catch (error) {
    console.error("Error sending email via Resend:", error);
    return NextResponse.json(
      { success: false, message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
