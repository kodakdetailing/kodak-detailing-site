import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    metadataBase: new URL("https://kodakdetailing.com"),
    title: "Mobile Auto Detailing Naperville IL | Kodak Detailing",
    description:
          "5-star mobile auto detailing in Naperville, Wheaton & Aurora. We come to you — full details from $300, paint correction from $275. Book online today.",
    alternates: { canonical: "/" },
    openGraph: {
          title: "Mobile Auto Detailing Naperville IL | Kodak Detailing",
          description:
                  "5-star mobile auto detailing in Naperville & the west Chicago suburbs. We come to you — full details from $300.",
          url: "https://kodakdetailing.com",
          siteName: "Kodak Mobile Detailing",
          images: [
            {
                      url: "/hero-car.jpg",
                      width: 1200,
                      height: 630,
                      alt: "Kodak Mobile Detailing in Naperville, IL",
            },
                ],
          locale: "en_US",
          type: "website",
    },
    twitter: {
          card: "summary_large_image",
          title: "Mobile Auto Detailing Naperville IL | Kodak Detailing",
          description:
                  "5-star mobile auto detailing in Naperville & the west Chicago suburbs.",
          images: ["/hero-car.jpg"],
    },
};

export default function RootLayout({ children }) {
    return (
          <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SpeedInsights />
      </body>
      </html>
  );
}
