import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import NavBar from "@/components/common/NavBar";
import MobileNavBar from "@/components/common/MobileNavBar";
import Footer from "@/components/common/Footer";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";
import ScrollToTop from "@/components/common/ScrollToTop";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RMT USA",
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
        <ScrollProgressBar />
        <ScrollToTop />
        <NavBar />
        <MobileNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
