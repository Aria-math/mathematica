import Container from '../global/Container';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import NavSearch from './NavSearch';
import { Suspense } from 'react';

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4">
        {/* Logo */}
        <div className="order-1 sm:order-1 flex justify-center">
          <Logo />
        </div>

        {/* Search */}
        <div className="order-3 sm:order-2 w-full flex justify-center sm:flex-1 sm:justify-center sm:max-w-md">
          <Suspense>
            <NavSearch />
          </Suspense>
        </div>

        {/* Actions */}
        <div className="order-2 sm:order-3 flex gap-4 justify-between sm:items-center">
          <div className="flex gap-4">
            <CartButton />
            <DarkMode />
          </div>
          <div>
            <LinksDropdown />
          </div>
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
