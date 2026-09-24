import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clean Commute Challenge",
  description: "Track your sustainable commute during October",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
