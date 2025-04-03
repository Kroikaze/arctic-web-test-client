import { FC, useState } from 'react';

import DropdownWrapper from '@/components/Header/DropdownWrapper.tsx';
import useScreenSize from '@/hooks/useScreenSize';

import Logo from './Logo.tsx';
import Nav from './Nav.tsx';
import RequestCall from './RequestCall.tsx';
import ShoppingCart from './ShoppingCart.tsx';

const Header: FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const { isLaptopSm } = useScreenSize();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleCloseMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="bg-white">
            <div className="container mx-auto flex justify-between items-center px-4 py-4">
                {!isLaptopSm && (
                    <button onClick={toggleMobileMenu} className="text-2xl laptop-sm:hidden">
                        ☰
                    </button>
                )}
                <Logo />
                {isLaptopSm && <RequestCall />}
                <ShoppingCart />
            </div>

            {!isLaptopSm && isMobileMenuOpen && (
                <DropdownWrapper callback={handleCloseMobileMenu}>
                    <Nav isMobileOpen={isMobileMenuOpen} />
                </DropdownWrapper>
            )}

            {isLaptopSm && <Nav />}
        </header>
    );
};

export default Header;
