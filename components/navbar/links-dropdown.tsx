'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
import UserIcon from './user-icon';
import { Show, SignInButton, SignUpButton } from '@clerk/nextjs';
import SignOutLink from './sign-out-link';

export const LinksDropdown = ({
  isAdmin,
  profileImage,
}: {
  isAdmin: boolean;
  profileImage: string | null;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex max-w-25 gap-4">
          <LuAlignLeft className="h-6 w-6" />
          <UserIcon profileImage={profileImage} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        <Show when="signed-out">
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </Show>
        <Show when="signed-in">
          {links.map((link) => {
            if (link.label === 'dashboard' && !isAdmin) return null;
            return (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className="w-full capitalize">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </Show>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
