import { formatCurrency } from '@/utils/format';
import { Product } from '@prisma/client';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';


function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div dir='rtl' className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const dollarsAmount = formatCurrency(price);

        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500 dark:shadow-[0_0_4px_#484747] dark:group-hover:shadow-[0_25px_30px_-5px_rgba(72,71,71,0.2),0_15px_15px_-5px_rgba(72,71,71,0.1)]">
                <CardContent className="p-4">
                  <div className="relative rounded overflow-hidden aspect-square lg:aspect-square">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw "
                      priority
                      className="rounded object-cover transform group-hover:scale-110 transition-transform duration-500"
                      unoptimized // Next server cant optimize it in required time!
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <h2 className="text-lg capitalize font-Vazir">{name}</h2>
                    <p className="text-muted-foreground mt-2 font-Vazir">
                      {dollarsAmount}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-7 right-7 z-5">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
