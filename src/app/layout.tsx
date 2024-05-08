import { LenisProvider } from "@/components/LenisProvider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Asesorías legales",
  description: "Asesoramos tus reclamos anteentidades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisProvider>
        <body className={inter.className}>{children}</body>
      </LenisProvider>
    </html>
  );
}
