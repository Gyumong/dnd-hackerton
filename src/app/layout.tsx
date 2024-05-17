import { DndBodyFont } from '@/app/fonts';
import { QueryClientProvider } from '@/shared/apis/queryClientProvider';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={DndBodyFont.className}>
    <head>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        strategy="beforeInteractive"
      />
      <Script
        type="text/javascript"
        src={`openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}&submodules=geocoder`}
      ></Script>
    </head>
      <body className="mx-auto h-dvh max-w-[375px]">
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
