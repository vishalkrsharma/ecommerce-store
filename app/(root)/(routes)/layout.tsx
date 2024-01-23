import { ReactNode } from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const HomeLayout = async ({ children, params }: { children: ReactNode; params: { storeId: string } }) => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
