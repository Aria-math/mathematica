import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import { fetchSingleProduct, findExistingReview } from '@/utils/actions';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/single-product/AddToCart';
import ProductRating from '@/components/single-product/ProductRating';
import ShareButton from '@/components/single-product/ShareButton';
import SubmitReview from '@/components/reviews/SubmitReview';
import ProductReviews from '@/components/reviews/ProductReviews';
import { auth } from '@clerk/nextjs/server';
import { Separator } from '@/components/ui/separator';

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);

  const { userId } = auth();

  const reviewDoesNotExist =
    userId && !(await findExistingReview(userId, product.id));

  return (
    <section>
      <BreadCrumbs name={product.name} />

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative w-full aspect-square lg:aspect-square">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
            priority
            className="rounded object-cover"
            unoptimized
          />
        </div>

        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div dir="rtl" className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold font-Vazir">
              {name}{' '}
            </h1>
            <div className="flex items-center gap-x-2 mb-2">
              <FavoriteToggleButton productId={params.id} />
              <ShareButton name={product.name} productId={params.id} />
            </div>
          </div>

          <ProductRating productId={params.id} />
          <Separator className="border border-gray-900 dark:border-hidden" />
          <h4 dir="rtl" className="text-xl mt-6 font-Vazir">
             مدرس : {company}
          </h4>

          <div dir="rtl">
            <p className="mt-3 text-md bg-muted inline-block p-2 rounded font-Vazir">
              {dollarsAmount}
            </p>
          </div>

          <p className="mt-4 leading-8 dark:text-muted-foreground font-Vazir text-right">
            {description}
          </p>

          <AddToCart productId={params.id} />
        </div>
      </div>

      <ProductReviews productId={params.id} />

      {reviewDoesNotExist && <SubmitReview productId={params.id} />}
    </section>
  );
}
export default SingleProductPage;
