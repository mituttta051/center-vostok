import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "center vostok",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${ptSerif.className} `}>{children}</body>
    </html>
  );
}
