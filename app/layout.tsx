import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Favicon from "@/public/SCTP1.png";
import { Toaster } from "sonner";
import Providers from "./provider";
import Preloader from "./loading";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "SelmCorp",
  description: "Our website is launching today!!!",
  icons: {
    icon: Favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable}`}>
        <Preloader />
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
