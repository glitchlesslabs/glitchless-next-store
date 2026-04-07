'use server';

import db from '@/utils/db';

export async function findExistingReview(userId: string, productId: string) {
  return db.review.findFirst({
    where: {
      clerkId: userId,
      productId,
    },
  });
}
