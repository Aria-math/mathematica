import Link from 'next/link';
import Image from 'next/image';
import LogoImageLight from '@/public/images/logo-black.png';
import LogoImageDark from '@/public/images/logo-white.png';

function Logo() {
  return (
    <Link href="/">
      <div className="w-40 h-20 relative">
        <Image
          src={LogoImageLight}
          alt="logo"
          fill
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
          priority
          className="object-contain dark:hidden"
        />
        <Image
          src={LogoImageDark}
          alt="logo"
          fill
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
          priority
          className="object-contain hidden dark:block"
        />
      </div>
    </Link>
  );
}
export default Logo;
