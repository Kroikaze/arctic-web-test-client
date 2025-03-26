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
                <div className="">
                    <button onClick={toggleMobileMenu} className="text-2xl">
                        ☰
                    </button>
                </div>

                <div className="">
                    <Logo />
                </div>

                <div className="hidden">
                    <RequestCall />
                </div>

                <div className="">
                    <ShoppingCart />
                </div>
            </div>

            <div className={`${isMobileMenuOpen ? 'block w-fit' : 'hidden'} `}>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
