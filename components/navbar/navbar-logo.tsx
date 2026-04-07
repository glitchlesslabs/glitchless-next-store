import Link from 'next/link';
import { VscCode } from 'react-icons/vsc';
import { Button } from '../ui';

export const NavbarLogo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <VscCode className="h-6 w-6" />
      </Link>
    </Button>
  );
};
