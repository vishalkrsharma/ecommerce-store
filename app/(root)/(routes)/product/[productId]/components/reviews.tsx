import { auth } from '@clerk/nextjs';
import ReviewForm from './review-form';
import { Review as ReviewType } from '@/types';
import ReviewList from './review-list';

const Reviews = ({ reviews }: { reviews: ReviewType[] }) => {
  const { userId } = auth();

  return (
    <div className='md:flex gap-2 max-md:space-y-8'>
      <ReviewForm userId={userId} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default Reviews;
