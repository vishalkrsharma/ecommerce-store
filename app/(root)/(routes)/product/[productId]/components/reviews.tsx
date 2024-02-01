import { auth } from '@clerk/nextjs';
import ReviewForm from './review-form';
import { Review as ReviewType } from '@/types';
import NoResults from '@/components/ui/no-results';
import Review from './review';

const Reviews = ({ reviews }: { reviews: ReviewType[] }) => {
  const { userId } = auth();

  return (
    <div className='flex gap-2 mb-10 '>
      <ReviewForm userId={userId} />
      <div className='w-1/2'>
        <h3 className='font-bold text-3xl mb-2 sticky top-0'>Recent reviews</h3>
        <div className='space-y-2 max-h-[225px] overflow-y-scroll'>
          {reviews.length === 0 && <NoResults />}
          {reviews.map((item) => (
            <Review
              data={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
