"use client"; // This makes the component client-side
import { useEffect, useState } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <title>Click Automations</title>
        <meta name="description" content="פתרונות אוטומציה חכמים לעסקים - חסכו זמן, כסף ומשאבים" />
        
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {mounted && children} {/* Ensures no mismatches */}
        </ThemeProvider>
      </body>
    </html>
  );
}
