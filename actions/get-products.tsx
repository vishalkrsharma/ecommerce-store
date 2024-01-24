import { Product } from '@/types';
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query) => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        colorId: query.colorId,
        sizeId: query.sizeId,
        categoryId: query.categoryId,
        isFeatured: query.isFeatured,
      },
    });
    const res = await fetch(url);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default getProducts;
