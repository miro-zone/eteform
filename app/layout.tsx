import { Navbar } from "./_navbar/navbar";
import { NavbarProvider } from "./_navbar/navbar_context";
import "./globals.css";
import { Noto_Kufi_Arabic } from "next/font/google";

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
        <NavbarProvider>
          <Navbar
            routes={[
              { content: { title: "الرئيسية" }, href: "/" },
              {
                content: { title: "الخدمات" },
                routes: [
                  { href: "/services/1", content: { title: "الخدمة الاولي" } },
                  {
                    content: { title: "الخدمات المميزه" },
                    routes: [
                      {
                        href: "/services/1/vip",
                        content: { title: "وصف الخدمة الاولي" },
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </NavbarProvider>
        {children}
      </body>
    </html>
  );
}
