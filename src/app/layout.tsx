import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mindvalley Organic Social — Workflow Engine",
  description:
    "End-to-end organic content operations: eight interconnected phases forming a continuous loop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
