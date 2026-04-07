import 'server-only';
import { getAuthUser } from '@/lib/auth';
import db from '@/utils/db';

export async function fetchUserFavorites() {
  const user = await getAuthUser();
  const favorites = await db.favorite.findMany({
    where: {
      clerkId: user.userId!,
    },
    include: {
      product: true,
    },
  });
  return favorites;
}
