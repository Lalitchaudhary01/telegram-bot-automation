import "./globals.css";
import type { Metadata } from "next";
import { NavbarMenu } from "@/components/ui/navbar-menu";

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
    <html lang="en">
      <body>
        <NavbarMenu /> {/* ✅ Imported navbar here */}
        {children}
      </body>
    </html>
  );
}
