import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing",
  description: "Landing page built with shadcn blocks",
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
