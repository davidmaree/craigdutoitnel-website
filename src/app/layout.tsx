import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";
import { ChatWidget } from "@/components/chat/ChatWidget";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Craig du Toit Nel | Wellness Platform",
    template: "%s | Craig du Toit Nel",
  },
  description:
    "Premium wellness, skincare, and lifestyle solutions. Explore Craig Slimming and Craig Lifestyle — two worlds, one brand.",
  metadataBase: new URL("https://craigdutoitnel.co.za"),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://craigdutoitnel.co.za",
    siteName: "Craig du Toit Nel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${spaceMono.variable} font-sans antialiased bg-white text-charcoal`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
