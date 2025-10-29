import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FastHirely - Get Job Faster, Hire Faster | India's First Premium Job Platform",
  description: "FastHirely helps you get job faster, hire faster. India's first premium job platform to help employers hire 1x, 2x, 3x faster. Starting at just ₹199.",
  verification: {
    google: "wiH5UzB4OntjiBa4XxZGOCjXrlwYr-weq_gBkDan8qo",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
