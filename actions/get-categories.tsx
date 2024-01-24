import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async () => {
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default getCategories;
