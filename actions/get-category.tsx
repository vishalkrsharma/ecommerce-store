import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string) => {
  try {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default getCategory;
