import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Presentation - Create Stunning Presentations with AI",
  description: "Transform your ideas into professional presentations with AI-powered design and content generation. Create, collaborate, and present like never before.",
  keywords: "AI presentation, presentation maker, AI design, content generation, business presentations, professional slides",
  authors: [{ name: "AI Presentation" }],
  creator: "AI Presentation",
  publisher: "AI Presentation",
  openGraph: {
    title: "AI Presentation - Create Stunning Presentations with AI",
    description: "Transform your ideas into professional presentations with AI-powered design and content generation. Create, collaborate, and present like never before.",
    url: "https://aipresentation.com",
    siteName: "AI Presentation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Presentation - Create Stunning Presentations with AI"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Presentation - Create Stunning Presentations with AI",
    description: "Transform your ideas into professional presentations with AI-powered design and content generation. Create, collaborate, and present like never before.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="grid grid-rows-[auto_1fr] h-svh">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
