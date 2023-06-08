import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tinytie | easily shorten links",
  description:
    "tinytie is a free link shortener that allows you to create short links for any page on the internet, lightning fast.",
  keywords: [
    "custom URL shortener",
    "URL branding",
    "link redirection",
    "click tracking",
    "link statistics",
    "URL optimization",
    "shareable links",
    "link customization",
    "URL branding",
    "link branding",
    "link sharing",
    "URL tracking",
    "link shortening service",
    "URL management platform",
    "web analytics",
    "traffic analysis",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#065F46",
  openGraph: {
    title: "tinytie | easily shorten links",
    type: "website",
    description:
      "tinytie is a free link shortener that allows you to create short links for any page on the internet, lightning fast.",
    url: "https://tinytie.vercel.app",
    siteName: "tinytie",
    locale: "en_GB",
  },
  metadataBase: new URL("https://tinytie.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white">
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
