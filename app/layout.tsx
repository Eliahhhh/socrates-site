import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://socratesintheheights.ca"),
  title: "Socrates in the Heights | Authentic Greek Food in Burnaby, BC",
  description:
    "Family-run Greek restaurant in Burnaby serving fresh souvlaki, roasted lamb, moussaka, and traditional Greek dishes. Takeout, delivery, and catering available. Call (604) 299-3777.",
  keywords:
    "Greek restaurant Burnaby, souvlaki Burnaby, Greek food Burnaby, Greek takeout Burnaby, Socrates in the Heights, Greek catering Burnaby",
  openGraph: {
    title: "Socrates in the Heights | Authentic Greek Food in Burnaby",
    description:
      "Fresh souvlaki, roasted lamb, and traditional Greek dishes. Family-run takeout in Burnaby, BC.",
    url: "https://socratesintheheights.ca",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://socratesintheheights.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        {/* "restaurant" is a Facebook Open Graph object type, not in Next's
            built-in OpenGraphType union, so it's rendered directly here. */}
        <meta property="og:type" content="restaurant" />
      </head>
      <body className="bg-cream text-navy font-body antialiased">
        {children}
      </body>
    </html>
  );
}
