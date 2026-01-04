import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Fakhri Die Makers",
  description: "Precision Laser Die & Corrugation Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-gray-800 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
