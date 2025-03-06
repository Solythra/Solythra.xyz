import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solythra - Awakening",
  description: "The Multiverse Trembles. Solythra Awakens.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
