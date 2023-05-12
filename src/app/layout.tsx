import { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "tinytie | easily shorten links",
  description:
    "tinytie is a free link shortener that allows you to create short links for any page on the internet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>👔</text></svg>"
        />
      </Head>
      <html lang="en">
        <body className="bg-neutral-900 text-white">
          <div className="container mx-auto">{children}</div>
        </body>
      </html>
    </>
  );
}
