import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';
import { PropsWithChildren } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='en'>
      <body className={urbanist.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
