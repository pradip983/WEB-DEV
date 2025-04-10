import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me A chai - Fund your project with chai",
  description: "this website is a crowdfunding platform for creater lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
        <Navbar />
        {children}
        <Footer />
        </SessionWrapper>
        </body>
    </html>
  );
}
