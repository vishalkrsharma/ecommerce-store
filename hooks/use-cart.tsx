import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

import { CartItem, Product } from '@/types';

interface CartStore {
  items: CartItem[];
  addItem: (data: Product) => void;
  removeItem: (data: Product) => void;
  removeItemAll: (data: Product) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        let items = get().items;
        const idx = items.findIndex((item) => item.product.id === data.id);

        if (idx !== -1) items[idx].quantity++;
        else items.push({ product: data, quantity: 1 });

        set({ items });
        toast.success('Item added to cart.');

        // const currentItems = get().items;
        // const existingItem = currentItems.find((item) => item.id === data.id);

        // if (existingItem) {
        //   return toast('Item already in cart.');
        // }

        // set({ items: [...get().items, data] });
        // toast.success('Item added to cart.');
      },
      removeItem: (data: Product) => {
        let items = get().items;
        const idx = items.findIndex((item) => item.product.id === data.id);

        if (items[idx].quantity === 1) {
          items.splice(idx, 1);
        } else {
          items[idx].quantity--;
        }
        set({ items });
        toast.success('Item removed from cart.');

        // set({ items: [...get().items.filter((item) => item.product.id !== data.id)] });
      },
      removeItemAll: (data: Product) => {
        let items = get().items;
        const idx = items.findIndex((item) => item.product.id === data.id);
        items.splice(idx, 1);
        set({ items });
        toast.success('Item removed from cart.');
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
