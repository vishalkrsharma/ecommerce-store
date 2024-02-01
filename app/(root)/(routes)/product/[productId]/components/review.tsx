import prismadb from '@/lib/prismadb';
import { Review } from '@/types';

const Review = async ({ data }: { data: Review }) => {
  const { userId, sentiment, content } = data;

  const user = await prismadb.user.findUnique({
    where: {
      externalId: userId,
    },
  });

  return (
    <div className='space-y-2 border rounded-lg p-2 mr-4'>
      {user ? (
        <div className='flex justify-start items-center gap-2'>
          <img
            className='h-8 w-8 rounded-full'
            src={user.image_url}
          />
          <h5>
            {user.first_name} {user.last_name}
          </h5>
        </div>
      ) : (
        <div className='flex justify-start items-center gap-2'>
          <div className='h-8 w-8' />
          <h5>[DELETED_USER]</h5>
        </div>
      )}

      <p className='ml-10'>{content}</p>
    </div>
  );
};

export default Review;
