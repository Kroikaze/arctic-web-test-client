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
            <div className="mx-auto flex justify-between items-center px-6 py-4">
                <div className="order-1 block xl:hidden">
                    <button onClick={toggleMobileMenu} className="text-2xl">
                        ☰
                    </button>
                </div>

                <div className="order-3 lg:order-2">
                    <ShoppingCart />
                </div>

                <div className="order-2 lg:order-3 flex-1">
                    <Logo />
                </div>

                <div className="order-4 hidden lg:block">
                    <RequestCall />
                </div>
            </div>

            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} xl:block w-fit`}>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
