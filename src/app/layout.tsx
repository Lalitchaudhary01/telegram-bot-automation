import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "Telegram Bot Platform",
  description: "Automate Telegram ads easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body>
          <Navbar /> {/* ✅ Imported navbar here */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
