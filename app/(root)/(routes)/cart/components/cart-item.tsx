import Image from 'next/image';
import { Minus, Plus, ShoppingCart, X } from 'lucide-react';

import IconButton from '@/components/ui/icon-button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';
import { Product } from '@/types';
import Button from '@/components/ui/button';

const CartItem = ({ data, quantity }: { data: Product; quantity: number }) => {
  const cart = useCart();
  const [itemOnCart] = cart.items.map((item) => {
    if (item.product.id === data.id) return item.quantity;
  });

  const onRemove = () => {
    cart.removeItemAll(data);
  };

  const onAddToCart = () => {
    cart.addItem(data);
  };

  const onDeleteFromCart = () => {
    cart.removeItem(data);
  };

  return (
    <li className='flex py-6 border-b'>
      <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
        <Image
          fill
          src={data.images[0].url}
          alt=''
          className='object-cover object-center'
        />
      </div>
      <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
        <div className='absolute z-10 right-0 top-0'>
          <IconButton
            onClick={onRemove}
            icon={<X size={15} />}
          />
        </div>
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
          <div className='flex justify-between'>
            <p className=' text-lg font-semibold text-black'>{data.name}</p>
          </div>

          <div className='mt-1 flex text-sm'>
            <p className='text-gray-500'>{data.color.name}</p>
            <p className='ml-4 border-l border-gray-200 pl-4 text-gray-500'>{data.size.name}</p>
          </div>
          <Currency value={data.price} />
          <div className='text-gray-500 font-semibold'>Quantity: {quantity}</div>
        </div>
        <div className='mt-10 inline-flex border p-1 rounded-full items-center gap-x-3 absolute bottom-0'>
          <Button
            className='p-2'
            onClick={onDeleteFromCart}
            disabled={quantity === 0}
          >
            <Minus />
          </Button>
          <div className='flex items-center gap-x-2'>
            Add To Cart
            <ShoppingCart size={20} />
          </div>
          <Button
            className='p-2'
            onClick={onAddToCart}
            disabled={data.stock === quantity || data.stock === 0}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
