'use client';

import { usePathname } from 'next/navigation';
import { CardSubmitButton, FormContainer } from '@/components/form';
import { toggleFavoriteAction } from '@/features/favorites/actions';

type FavoriteToggleFormProps = {
  productId: string;
  favoriteId: string | null | undefined;
};

export const FavoriteToggleForm = ({
  productId,
  favoriteId,
}: FavoriteToggleFormProps) => {
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
};
