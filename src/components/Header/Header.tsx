import { useState } from 'react';

import Logo from './Logo.tsx';
import Nav from './Nav.tsx';
import RequestCall from './RequestCall.tsx';
import ShoppingCart from './ShoppingCart.tsx';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <div className="block md:hidden">
                    <button onClick={toggleMobileMenu} className="text-2xl">
                        ☰
                    </button>
                </div>

                <div className="flex-1 text-center md:text-left">
                    <Logo />
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <ShoppingCart />
                    <RequestCall />
                </div>
            </div>

            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
