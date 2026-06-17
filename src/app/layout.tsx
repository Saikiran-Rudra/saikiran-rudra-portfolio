import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saikiran Rudra | Full-Stack Developer & AI Engineer",
  description:
    "Full-Stack Developer with 6 months of internship experience in React.js, Next.js, Node.js, and MongoDB. Transitioning into AI Engineering. Open to remote & relocation.",
  keywords: [
    "Saikiran Rudra",
    "Full Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Saikiran Rudra" }],
  openGraph: {
    title: "Saikiran Rudra | Full-Stack Developer & AI Engineer",
    description:
      "Building scalable web applications and AI-driven solutions from Surat, Gujarat.",
    url: "https://saikiran-rudra-portfolio.vercel.app/",
    siteName: "Saikiran Rudra Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} h-full antialiased noise`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={["dark", "light"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
