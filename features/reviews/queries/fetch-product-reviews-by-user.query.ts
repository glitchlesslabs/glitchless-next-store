'use server';

import { getAuthUser } from '@/lib/auth';
import db from '@/utils/db';

export async function fetchProductReviewsByUser() {
  const user = await getAuthUser();
  const reviews = await db.review.findMany({
    where: {
      clerkId: user.userId!,
    },
    select: {
      id: true,
      rating: true,
      comment: true,
      product: {
        select: {
          image: true,
          name: true,
        },
      },
    },
  });
  return reviews;
}
