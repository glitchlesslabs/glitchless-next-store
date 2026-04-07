import {
  AddToCart,
  BreadCrumbs,
  ShareButton,
} from '@/components/single-product';
import { fetchSingleProduct } from '@/utils/actions';
import { findExistingReview } from '@/features/reviews/queries';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import FavoriteToggleButton from '@/features/favorites/components/FavoriteToggleButton';
import ProductRating from '@/features/favorites/components/ProductRating';
import { ProductReviews, SubmitReview } from '@/features/reviews/components';
import { currentUser } from '@clerk/nextjs/server';

async function SingleProductPage({
  params,
}: {
  params: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedParams = await params;
  const idParam = resolvedParams.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam;
  const user = await currentUser();

  if (!id) {
    throw new Error('Missing product id');
  }
  const reviewDoesNotExist =
    user?.id && !(await findExistingReview(user?.id, id));
  const product = await fetchSingleProduct(id);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="grid-gap-y-8 mt-6 grid lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="w-full rounded object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex items-center gap-x-8">
            <h1 className="text-3xl font-bold capitalize">{name}</h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={id} />
              <ShareButton name={product.name} productId={id} />
            </div>
          </div>
          <ProductRating productId={id} />
          <h4 className="mt-2 text-xl">{company}</h4>
          <p className="text-md mt-3 inline-block rounded bg-muted p-2">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
      <ProductReviews productId={id} />
      {reviewDoesNotExist && <SubmitReview productId={id} />}
    </section>
  );
}
export default SingleProductPage;
