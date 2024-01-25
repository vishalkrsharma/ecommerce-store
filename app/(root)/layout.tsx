import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

const SetupLayout = ({ children }: PropsWithChildren) => {
  const { userId } = auth();

  if (!userId) redirect('/sigin-in');

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default SetupLayout;
