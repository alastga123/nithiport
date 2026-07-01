import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/app/globals.css";

import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Nithipat Lertsopaphan — UX/UI Designer",
  description: "Portfolio of Nithipat Lertsopaphan, UX/UI Designer at LivingInsider.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-sans">
      <body className={`${poppins.variable} font-body bg-bg text-body`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
