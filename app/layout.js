import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Danish | 14-Year-Old Developer",
  description: "Portfolio of Danish, a young developer from India passionate about creating beautiful and functional applications.",
  keywords: ["Danish", "developer", "portfolio", "programming", "web development", "India", "young developer"],
  authors: [{ name: "Danish" }],
  creator: "Danish",
  openGraph: {
    title: "Danish | 14-Year-Old Developer",
    description: "Portfolio of Danish, a young developer from India passionate about creating beautiful and functional applications.",
    url: "https://danish-portfolio.vercel.app/",
    siteName: "Danish's Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
