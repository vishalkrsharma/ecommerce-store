import { Review as ReviewType } from '@/types';
import NoResults from '@/components/ui/no-results';
import Review from './review';

const ReviewList = ({ reviews }: { reviews: ReviewType[] }) => {
  return (
    <div className='md:w-1/2'>
      <h3 className='font-bold text-3xl mb-2 sticky top-0'>Recent reviews</h3>
      <div className='space-y-2 md:max-h-[234px] overflow-y-scroll'>
        {reviews.length === 0 && <NoResults />}
        {reviews.map((item) => (
          <Review
            data={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
