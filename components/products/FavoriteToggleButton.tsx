import { currentUser } from '@clerk/nextjs/server';
import { CardSignInButton } from '../form/buttons';
import { fetchFavoriteId } from '@/features/favorites/queries';
import FavoriteToggleForm from './FavoriteToggleForm';

async function FavoriteToggleButton({ productId }: { productId: string }) {
  const user = await currentUser();

  if (!user?.id) return <CardSignInButton />;

  const favoriteId = await fetchFavoriteId({ productId });

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}
export default FavoriteToggleButton;
