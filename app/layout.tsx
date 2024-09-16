import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: 'Expert Stack Testing Services | Stack Test Group',
  description: 'Leading provider of stack testing services for industrial facilities. Over 50 years of experience in emissions compliance and performance optimization.',
  keywords: 'stack testing, emissions testing, environmental compliance, air quality, combustion testing, permit compliance, air toxic studies, emissions optimization',
  openGraph: {
    title: 'Expert Stack Testing Services',
    description: 'We provide emissions testing and compliance services for industrial facilities.',
    url: 'https://www.yoursite.com',
    type: 'website',
    images: [
      {
        url: '/stack-test.png',
        alt: 'Stack Test Group Logo',
      },
    ],
  },
icons: {
	icon: '/blue-stack-test.png'
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
