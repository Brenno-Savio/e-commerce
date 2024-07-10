import Header from '@/components/Header/Header';
import { GlobalProvider } from '@/context/globalProvider';
import ContextProvider from '@/providers/contextProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Commerce',
  description: 'An e-commerce made as a demonstration',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Header />
          <GlobalProvider>{children}</GlobalProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
