import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import ToastProvider from '@/providers/toast-provider';
import ModalProvider from '@/providers/modal-provider';

import './globals.css';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={urbanist.className}>
          <ToastProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
