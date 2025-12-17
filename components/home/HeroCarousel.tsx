import hero1 from '@/public/images/poster1.png';
import hero2 from '@/public/images/poster2.png';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
const carouselImages = [hero1, hero2];

function HeroCarousel() {
  return (
    <div className="order-2 lg:order-1 lg:block">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card className=" border border-gray-400 dark:border-hidden">
                  <CardContent className="p-2">
                    <div className="w-full aspect-[16/9] relative rounded-md overflow-hidden">
                      <Image
                        src={image}
                        alt="hero"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />

        <div className="lg:hidden relative mt-8">
          <CarouselPrevious className="absolute left-0" />
          <CarouselNext className="absolute right-0" />
        </div>
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
