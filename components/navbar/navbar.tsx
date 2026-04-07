import { Suspense } from 'react';
import { CartButton } from './cart-button';
import { ModeToggle as DarkMode } from './dark-mode';
import { LinksDropdownWrapper as LinksDropdown } from './links-dropdown-wrapper';
import { NavbarLogo } from './navbar-logo';
import { NavSearch } from './nav-search';
import { Container } from '../global';

export const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col flex-wrap py-8 sm:flex-row sm:items-center sm:justify-between">
        <NavbarLogo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex items-center gap-4">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};
