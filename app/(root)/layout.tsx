import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

const SetupLayout = async ({ children }: PropsWithChildren) => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  return <>{children}</>;
};

export default SetupLayout;
