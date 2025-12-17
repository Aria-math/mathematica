import Link from 'next/link';
import { Button } from '../ui/button';
// import { VscCode } from 'react-icons/vsc';
import { TbMathIntegralX } from 'react-icons/tb';


function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <TbMathIntegralX className="w-6 h-6" />
      </Link>
    </Button>
  );
}
export default Logo;
