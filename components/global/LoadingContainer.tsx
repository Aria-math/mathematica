import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export default function Loading() {
  return (
    <section className="pt-24">
      {/* SECTION TITLE SKELETON */}
      <div>
        <Skeleton className="h-9 w-48 mb-8 ml-auto" />
        <Separator />
      </div>

      {/* PRODUCTS GRID SKELETON */}
      <div dir="rtl" className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <FeaturedProductSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

function FeaturedProductSkeleton() {
  return (
    <Card className="relative">
      <CardContent className="p-4">
        {/* IMAGE */}
        <div className="relative aspect-square overflow-hidden rounded">
          <Skeleton className="h-full w-full" />
        </div>

        {/* TEXT */}
        <div className="mt-4 text-center">
          <Skeleton className="h-5 w-3/4 mx-auto" />
          <Skeleton className="h-4 w-1/2 mx-auto mt-2" />
        </div>
      </CardContent>

      {/* FAVORITE BUTTON PLACEHOLDER */}
      <Skeleton className="absolute top-7 right-7 h-8 w-8 rounded-full" />
    </Card>
  );
}
