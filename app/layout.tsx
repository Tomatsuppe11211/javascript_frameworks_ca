import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/footer";
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
  title: "Online shop",
  description: "Created by Tomatsuppe11211",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      
      <body className="min-h-full border flex flex-col gap-5">
        <header>
          <Suspense fallback = { <div className="text-lg">Loading navigation...</div>}>
            <Navigation/>
          </Suspense>
        </header>
        
        {children}

        <Footer />
      </body>
    </html>
  );
}
