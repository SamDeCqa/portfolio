"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

import Layout from "@/components/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
