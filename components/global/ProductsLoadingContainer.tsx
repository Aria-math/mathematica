import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export default function Loading() {
  return (
    <>
      {/* HEADER SKELETON */}
      <section>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>

          <Skeleton className="h-6 w-40" />
        </div>

        <Separator className="mt-4" />
      </section>

      {/* PRODUCTS GRID SKELETON */}
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <LoadingProduct key={i} />
        ))}
      </div>
    </>
  );
}

function LoadingProduct() {
  return (
    <Card>
      <CardContent className="p-4">
        {/* IMAGE */}
        <div className="relative aspect-square overflow-hidden rounded">
          <Skeleton className="h-full w-full" />
        </div>

        {/* TITLE */}
        <Skeleton className="h-4 w-3/4 mt-4" />

        {/* PRICE / META */}
        <Skeleton className="h-4 w-1/2 mt-3" />
      </CardContent>
    </Card>
  );
}
