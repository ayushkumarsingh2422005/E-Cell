import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialMediaSidebar from "@/components/SocialMediaSidebar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Cell NIT Jamshedpur",
  keywords: ["Entrepreneurship", "E-Cell", "NIT Jamshedpur", "Student Activities", "Events"],
  authors: [
    {
      name: "DigiCraft",
      url: "",
    },
  ],
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SocialMediaSidebar />
        {children}
      </body>
    </html>
  );
}
