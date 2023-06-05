import "./globals.css";
import { Noto_Kufi_Arabic } from "next/font/google";

import { Navbar } from "./_navbar/navbar";

const noto = Noto_Kufi_Arabic({ subsets: ["arabic"] });

export const metadata = {
  title: "ETE-FORM",
  description: "ETEFORM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={noto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
