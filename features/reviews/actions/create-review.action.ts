'use server';

import { revalidatePath } from 'next/cache';
import { getAuthUser } from '@/lib/auth';
import { renderError } from '@/lib/utils';
import db from '@/utils/db';
import { validateWithZodSchema } from '@/utils/schemas';
import { reviewSchema } from '@/features/reviews/schemas';

export async function createReviewAction(_prevState: any, formData: FormData) {
  const user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(reviewSchema, rawData);

    await db.review.create({
      data: {
        ...validatedFields,
        clerkId: user.userId!,
      },
    });

    revalidatePath(`/products/${validatedFields.productId}`);

    return { message: 'review submitted successfully' };
  } catch (error) {
    return renderError(error);
  }
}
