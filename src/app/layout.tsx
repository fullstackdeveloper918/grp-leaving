"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
// import NextTopLoader from "nextjs-toploader";
const quicksand = Montserrat({ subsets: ["latin"] });
// import "nprogress/nprogress.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Script from "next/script";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import msalConfig from "../utils/msalConfig";
import NextTopLoader from "nextjs-toploader";
const msalInstance = new PublicClientApplication(msalConfig);
import { Roboto } from 'next/font/google';
// import { Montserrat } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const montserrat:any = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
          strategy="beforeInteractive" // This ensures it loads before the page is interactive
        />
        <Script async src="https://pay.google.com/gp/p/js/pay.js"></Script>
      </head>
      <body className={quicksand.className}>
        {/* <AntdRegistry> */}
        <AntdRegistry>
          <MsalProvider instance={msalInstance}>
            <Navbar />
            <NextTopLoader
              color="#00C4CC"
              initialPosition={0.08}
              crawlSpeed={20}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={100}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />
            {/* <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          /> */}
            {children}
            <Footer />
          </MsalProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
