import { FaStar } from 'react-icons/fa';
import { fetchProductRating } from '@/features/reviews/queries';

export const ProductRating = async ({ productId }: { productId: string }) => {
  const { count, rating } = await fetchProductRating(productId);

  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
  const countValue = `(${count}) reviews`;

  return (
    <span className={className}>
      <FaStar className="h-3 w-3" />
      {rating} {countValue}
    </span>
  );
};
