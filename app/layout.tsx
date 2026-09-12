import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio | Anthony Duarte",
  description: "Portafolio profesional de Anthony Duarte.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es' className='bg-[#0b0b0b]'>
      <body>{children}</body>
    </html>
  );
}
