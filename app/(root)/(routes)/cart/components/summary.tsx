'use client';

import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';

import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCart, { CartStore } from '@/hooks/use-cart';
import { CartItem } from '@/types';

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state: CartStore) => state.items);
  const removeAll = useCart((state: CartStore) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total: number, item: CartItem) => {
    return total + Number(parseFloat(item.product.price) * item.quantity);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productsFromOrder: items.map((item: CartItem) => ({
        id: item.product.id,
        quantity: item.quantity,
      })),
    });

    window.location = response.data.url;
  };

  return (
    <div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
      <h2 className='text-lg font-medium text-gray-900'>Order summary</h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <div className='text-base font-medium text-gray-900'>Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className='w-full mt-6'
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
