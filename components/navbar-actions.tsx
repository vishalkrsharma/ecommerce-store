import { UserButton } from '@clerk/nextjs';
import CartButton from './cart-button';

const NavbarActions = () => {
  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <CartButton />
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default NavbarActions;
