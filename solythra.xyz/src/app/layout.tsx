import "./globals.css";

export const metadata = {
  title: "Solythra - Awakening Soon",
  description: "A new era begins...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
