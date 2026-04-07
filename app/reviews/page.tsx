import SectionTitle from '@/components/global/SectionTitle';
import {
  DeleteReview,
  fetchProductReviewsByUser,
  ReviewCard,
} from '@/features/reviews';

export default async function ReviewsPage() {
  const reviews = await fetchProductReviewsByUser();

  if (reviews.length === 0) {
    return <SectionTitle text="you have no reviews yet" />;
  }

  return (
    <>
      <SectionTitle text="Your Reviews" />
      <section className="mt-4 grid gap-8 md:grid-cols-2">
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { name, image } = review.product;
          const reviewInfo = { comment, rating, name, image };
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}
