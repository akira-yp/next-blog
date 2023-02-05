// import './globals.css'
import React,{ Suspense } from 'react'
import Link from "next/link";
import Provider from './Provider'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Loading from './loading';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <Provider>
          <Header />
            <Main>
              <Suspense fallback={<Loading/>}>
                {children}
              </Suspense>
            </Main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
