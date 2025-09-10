import "./globals.css";
import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-ui" });
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Isabel – Portfolio",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
