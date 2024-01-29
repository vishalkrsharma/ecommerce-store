import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';
import { PropsWithChildren } from 'react';
import { ClerkProvider } from '@clerk/nextjs';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={urbanist.className}>
          <ModalProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
