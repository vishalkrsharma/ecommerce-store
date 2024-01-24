const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string) => {
  try {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default getBillboard;
