'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';
import { Product } from '@/types';

const ProductCard = ({ data }: { data: Product }) => {
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'
    >
      {/* Image & actions */}
      <div className='aspect-square rounded-xl bg-gray-100 relative'>
        <Image
          src={data.images?.[0]?.url}
          alt='Product Image'
          fill
          className='aspect-square object-cover rounded-md'
        />
      </div>
      <div>
        <p className='font-semibold text-lg'>{data.name}</p>
        <p className='text-sm text-gray-500'>{data.category?.name}</p>
      </div>
      <div className='flex items-center justify-between'>
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
