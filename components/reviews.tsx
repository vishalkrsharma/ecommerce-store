import { auth } from '@clerk/nextjs';
import ReviewInput from './review-input';
import NoResults from './ui/no-results';

const Reviews = async () => {
  const { userId } = auth();
  const items = [];

  return (
    <div className='space-y-4 mb-10'>
      <h3 className='font-bold text-3xl'>Reviews</h3>
      <ReviewInput userId={userId} />
      {items.length === 0 && <NoResults />}
    </div>
  );
};

export default Reviews;
