import { create } from 'zustand';

import { Product } from '@/types';

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  stock?: number;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set: any) => ({
  isOpen: false,
  data: undefined,
  stock: undefined,
  onOpen: (data: Product) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
