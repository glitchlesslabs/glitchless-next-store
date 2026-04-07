import { currentUser } from '@clerk/nextjs/server';
import { CardSignInButton } from '@/components/form';
import { fetchFavoriteId } from '@/features/favorites';
import { FavoriteToggleForm } from './favorite-toggle-form';

export const FavoriteToggleButton = async ({
  productId,
}: {
  productId: string;
}) => {
  const user = await currentUser();

  if (!user?.id) return <CardSignInButton />;

  const favoriteId = await fetchFavoriteId({ productId });

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
};
