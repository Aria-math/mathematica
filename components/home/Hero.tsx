import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <HeroCarousel />
      <div className="order-1 lg:order-2">
        <h1 className="max-w-2xl font-bold text-3xl tracking-tight sm:text-4xl text-right font-Vazir">
          Mathematica.ir
        </h1>
        <div> </div>
        <h1 className="max-w-2xl font-bold text-3xl tracking-tight sm:text-4xl text-right font-Vazir">
          کامل ترین مرجع آموزش ریاضیات
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground text-right font-Vazir">
          با پکیج‌های جامع آموزش ریاضی، مفاهیم سخت را قدم‌ به‌ قدم و کاملاً
          کاربردی یاد بگیرید. آموزش از پایه تا پیشرفته، همراه با مثال‌های
          حل‌شده، تمرین‌های هدفمند و پشتیبانی آموزشی. اگر می‌خواهید ریاضی را
          واقعاً بفهمید و نتیجه بگیرید، جای درستی آمده‌اید. شروع یادگیری امروز،
          موفقیت فردا
        </p>
        <div className="flex items-center justify-center">
          <Button asChild size="lg" className="mt-10 font-Vazir">
            <Link href="/products">مشاهده ی محصولات</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
