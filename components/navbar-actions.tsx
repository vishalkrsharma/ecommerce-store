import { UserButton, auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import CartButton from '@/components/cart-button';

const NavbarActions = () => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <CartButton />
      <UserButton afterSignOutUrl='/sign-in' />
    </div>
  );
};

export default NavbarActions;
