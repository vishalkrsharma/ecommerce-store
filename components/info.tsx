'use client';

import { Minus, Plus, ShoppingCart } from 'lucide-react';

import Currency from '@/components/ui/currency';
import Button from '@/components/ui/button';
import { CartItem, Product } from '@/types';
import useCart from '@/hooks/use-cart';

const Info = ({ data }: { data: Product }) => {
  const cart = useCart();
  const [itemOnCart] = cart.items.map((item: CartItem) => {
    if (item.product.id === data.id) return item.quantity;
  });

  const onAddToCart = () => {
    cart.addItem(data);
  };

  const onDeleteFromCart = () => {
    cart.removeItem(data);
  };

  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
      <div className='mt-3 flex items-end justify-between'>
        <div className='text-2xl text-gray-900'>
          <Currency value={data?.price} />
        </div>
      </div>
      <hr className='my-4' />
      <div className='flex flex-col gap-y-6'>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Size:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Color:</h3>
          <div
            className='h-6 w-6 rounded-full border border-gray-600'
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
        <div>{data.stock !== 0 ? `Stock: ${data?.stock}` : `Out of stock.`}</div>
      </div>
      <div className='mt-10 inline-flex border p-1 rounded-full items-center gap-x-3'>
        <Button
          className='p-2'
          onClick={onDeleteFromCart}
          disabled={itemOnCart === undefined}
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
          disabled={data.stock === itemOnCart || data.stock === 0}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export default Info;
