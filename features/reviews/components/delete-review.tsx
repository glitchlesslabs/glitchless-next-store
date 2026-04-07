import { IconButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import { deleteReviewAction } from '../actions';

export default function DeleteReview({ reviewId }: { reviewId: string }) {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
