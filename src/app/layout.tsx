/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
import { getImagePrefix } from "../../utils/utils";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samwel Sikanyika",
  description:
    "Meet an ambitious Software developer capable of fancy stuffs and building best websites, systems e.t.c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        
        <link rel="shortcut icon" href={`${getImagePrefix()}favicon.png` } type="image/png" />
      </head>
      <body className={roboto.className} suppressHydrationWarning>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
