import type { Metadata } from "next";
import { Outfit, Dancing_Script, Fira_Code } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saikiran Rudra | Full Stack Developer",
  description: "Crafting premium, minimalist user interfaces and engineering robust backend logic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${outfit.variable} ${firaCode.variable} ${dancingScript.variable} h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

