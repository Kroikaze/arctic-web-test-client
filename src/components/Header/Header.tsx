import { FC, useState } from 'react';

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

    return (
        <header className="bg-white">
            <div className="container mx-auto flex justify-between items-center px-3 py-4">
                {!isLaptopSm && (
                    <button onClick={toggleMobileMenu} className="text-2xl laptop-sm:hidden">
                        ☰
                    </button>
                )}
                <Logo />
                {isLaptopSm && <RequestCall />}
                <ShoppingCart />
            </div>
            <Nav isMobileOpen={isMobileMenuOpen} />
        </header>
    );
};

export default Header;
