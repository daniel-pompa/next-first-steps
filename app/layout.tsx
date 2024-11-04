import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Footer, Navbar } from '@/components';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Discover our platform offering innovative solutions tailored to individual, business, and enterprise needs. Start exploring our features and find out how we can help you achieve your goals.',
  keywords:
    'innovative platform, solutions for businesses, individual solutions, enterprise tools, achieve goals, technology solutions, modern platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
