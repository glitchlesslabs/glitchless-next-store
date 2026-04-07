import 'server-only';
import { getAuthUser } from '@/lib/auth';
import { renderError } from '@/lib/utils';
import db from '@/utils/db';

export async function fetchFavoriteId({ productId }: { productId: string }) {
  const user = await getAuthUser();
  try {
    const favorite = await db.favorite.findFirst({
      where: {
        productId,
        clerkId: user.userId!,
      },
      select: {
        id: true,
      },
    });
    return favorite?.id || null;
  } catch (error) {
    renderError(error);
  }
}
