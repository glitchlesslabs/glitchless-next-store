'use server';

import db from "@/utils/db";

export async function fetchProductReviews(productId: string) {
  const reviews = await db.review.findMany({
    where: {
      productId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return reviews;
};
