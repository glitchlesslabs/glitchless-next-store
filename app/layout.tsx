import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/global/Container';
import Providers from './providers';

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Next Storefront',
  description: 'A nifty store built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={cn(
          'antialiased',
          fontMono.variable,
          'font-sans',
          fontSans.variable
        )}
      >
        <body>
          <Providers>
            <Navbar />
            <Container className="py-20">{children}</Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
