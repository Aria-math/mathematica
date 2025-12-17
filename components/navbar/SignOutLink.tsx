'use client';

import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '../ui/use-toast';
import Link from 'next/link';

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({
      description: (
        <div dir="rtl" className="text-right font-Vazir">
          در حال خروج از سیستم...!
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
