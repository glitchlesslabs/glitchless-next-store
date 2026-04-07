'use client';

import Link from 'next/link';
import { toast } from 'sonner';
import { SignOutButton } from '@clerk/nextjs';

function SignOutLink() {
  const handleLogout = () => {
    toast('Logout Successful');
  };

  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
}
export default SignOutLink;
