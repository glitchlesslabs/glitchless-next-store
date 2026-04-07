import { FormContainer, IconButton } from '@/components/form';
import { deleteReviewAction } from '../actions';

export default function DeleteReview({ reviewId }: { reviewId: string }) {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
