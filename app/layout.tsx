import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter, IBM_Plex_Serif} from "next/font/google";

/* Newly Added */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter"});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/* Modify MetaData */
export const metadata: Metadata = {
  title: "BWP",
  description: "BWP Is A Modern Banking Platform For Everyone",
  icons: {
    icon: 'icons/logo.svg'
  }
};

/* This will allow me to use Inter and IBM_Plex_Serif Throughout The Entire Application */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>  
        {children}
      </body>
    </html>
  );
}
