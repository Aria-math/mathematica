'use client';

import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '../ui/use-toast';
import Link from 'next/link';
import { IoIosCheckmarkCircle } from 'react-icons/io';

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({
      description: (
        <div className="flex items-center justify-between">
          <IoIosCheckmarkCircle className="text-green-500 h-6 w-6 flex-shrink-0 mr-1" />
          <div className="pr-2 font-Vazir"> ! ... در حال خروج از سیستم</div>
        </div>
      ),
      variant: 'success',
    });
  };
  return (
    <SignOutButton>
      <Link
        href="/"
        className="w-full font-Vazir text-right"
        onClick={handleLogout}
      >
        خروج از سیستم
      </Link>
    </SignOutButton>
  );
}
export default SignOutLink;
