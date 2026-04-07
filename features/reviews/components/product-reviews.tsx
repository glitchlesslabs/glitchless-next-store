import { fetchProductReviews } from '@/features/reviews/queries';
import { SectionTitle } from '@/components/global';
import ReviewCard from './review-card';

export default async function ProductReviews({
  productId,
}: {
  productId: string;
}) {
  const reviews = await fetchProductReviews(productId);

  return (
    <div className="mt-16">
      <SectionTitle text="product reviews" />
      <div className="my-8 grid gap-8 md:grid-cols-2">
        {reviews.map((review) => {
          const { comment, rating, authorImageUrl, authorName } = review;
          const reviewInfo = {
            comment,
            rating,
            image: authorImageUrl,
            name: authorName,
          };

          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
}
