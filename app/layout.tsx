import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Arvuta.eu – Eesti finantskalkulaatorid 2026",
  description:
    "Tasuta eestikeelsed finantskalkulaatorid: automaks, netopalk, laen, kodulaen, säästud, FIE maksud ja palju muud.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="et" className={`${plusJakarta.variable} ${dmMono.variable}`}>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-7NLB1Q52K0" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7NLB1Q52K0');
        `}</Script>
      </head>
      <body className="antialiased bg-[#F8FAFC] text-gray-900 flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
