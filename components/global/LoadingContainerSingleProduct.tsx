import { Skeleton } from '../ui/skeleton';
import { Separator } from '../ui/separator';

function SingleProductLoading() {
  return (
    <section>
      {/* Breadcrumb placeholder */}
      <Skeleton className="h-6 w-1/3 mb-6" />

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* LEFT IMAGE COLUMN */}
        <div className="relative w-full aspect-square lg:aspect-square">
          <Skeleton className="h-full w-full rounded" />
        </div>

        {/* RIGHT INFO COLUMN */}
        <div>
          {/* Title and buttons row */}
          <div className="flex gap-x-8 items-center">
            <Skeleton className="h-10 w-1/2 rounded" />
            <div className="flex items-center gap-x-2 mb-2">
              <Skeleton className="h-10 w-10 rounded-full" /> {/* Favorite */}
              <Skeleton className="h-10 w-10 rounded-full" /> {/* Share */}
            </div>
          </div>

          {/* Rating skeleton */}
          <Skeleton className="h-5 w-1/4 mt-2 rounded" />

          <Separator className="border border-gray-900 dark:border-hidden my-4" />

          {/* Teacher */}
          <Skeleton className="h-6 w-1/3 mt-2 rounded" />

          {/* Price */}
          <Skeleton className="h-8 w-1/4 mt-3 rounded" />

          {/* Description */}
          <Skeleton className="h-4 w-full mt-4 rounded" />
          <Skeleton className="h-4 w-full mt-2 rounded" />
          <Skeleton className="h-4 w-5/6 mt-2 rounded" />

          {/* Add to cart */}
          <Skeleton className="h-12 w-1/2 mt-6 rounded" />
        </div>
      </div>

      {/* Reviews placeholders */}
      <div dir="rtl" className="mt-12 space-y-4">
        <Skeleton className="h-6 w-1/4 rounded" /> {/* Reviews title */}
        <Skeleton className="h-40 w-full rounded" /> {/* Review content */}
        <Skeleton className="h-40 w-full rounded" />
      </div>

      {/* Submit review placeholder */}
      <div dir="rtl">
        <Skeleton className="h-12 w-1/3 mt-6 rounded" />
      </div>
    </section>
  );
}

export default SingleProductLoading;
