import { formatCurrency } from '@/utils/format';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@prisma/client';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';



function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className='mt-12 grid gap-y-8'>
      {products.map((product) => {
        const { name, price, image, company } = product;
        const dollarsAmount = formatCurrency(price);
        const productId = product.id;
        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-4 pt-6 gap-y-4 grid grid-cols-3">
                  <div className="relative h-35 md:h-48 md:w-48 aspect-square mr-6">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw "
                      priority
                      className="rounded object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="ml-auto">
                    <h2
                      dir="rtl"
                      className="text-xl font-semibold capitalize font-Vazir mb-4"
                    >
                      {name}
                    </h2>
                    <h4 dir="rtl" className="text-muted-foreground font-Vazir">
                      {company}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-lg ml-auto font-Vazir">
                    {dollarsAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <div className="absolute bottom-8 right-8 z-5">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsList;
