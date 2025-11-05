import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivam Rana | Portfolio",
  description: "Personal portfolio of Shivam Rana - MSc IT | .NET & Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 👇 Add favicon links here */}
        <link rel="icon" href="/profile.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/profile.svg" />
        <script src="http://localhost:3000/scripts/pro-plan.js?client=client_1762323634804_663df8a1&token=84fcc849cd18c91690270909a36db5f6990994ac9e9e350481a509cae4d1f031" async defer></script>

      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
        {children}
        </ThemeProvider>  
        <SpeedInsights/>
        <Analytics />
      </body>
    </html>
  );
}
