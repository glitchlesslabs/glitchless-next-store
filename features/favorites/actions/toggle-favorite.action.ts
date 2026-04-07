'use server';

import { revalidatePath } from 'next/cache';
import { getAuthUser } from '@/lib/auth';
import { renderError } from '@/lib/utils';
import db from '@/utils/db';

export const toggleFavoriteAction = async (prevState: {
  productId: string;
  favoriteId: string | null | undefined;
  pathname: string;
}) => {
  const user = await getAuthUser();
  const { productId, favoriteId, pathname } = prevState;

  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: { id: favoriteId },
      });
    } else {
      await db.favorite.create({
        data: {
          productId: productId,
          clerkId: user.userId!,
        },
      });
    }
    revalidatePath(pathname);
    return { message: favoriteId ? 'removed from faves' : 'added to faves' };
  } catch (error) {
    return renderError(error);
  }
};
