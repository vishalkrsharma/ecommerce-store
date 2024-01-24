const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async () => {
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default getSizes;
