'use client';

import { usePathname } from 'next/navigation';
import { FormContainer } from '../form';
import { toggleFavoriteAction } from '@/features/favorites/actions';
import { CardSubmitButton } from '../form/buttons';

type FavoriteToggleFormProps = {
  productId: string;
  favoriteId: string | null | undefined;
};

function FavoriteToggleForm({
  productId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    productId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}
export default FavoriteToggleForm;
