import { FC, useState } from 'react';

import Logo from './Logo.tsx';
import Nav from './Nav.tsx';
import RequestCall from './RequestCall.tsx';
import ShoppingCart from './ShoppingCart.tsx';

const Header: FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white">
            <div className="mx-auto flex justify-between items-center px-6 py-4">
                <div className="laptop-sm:hidden">
                    <button onClick={toggleMobileMenu} className="text-2xl">
                        ☰
                    </button>
                </div>
                <Logo />
                <div className="hidden laptop-sm:block">
                    <RequestCall />
                </div>
                <ShoppingCart />
            </div>

            <div className={`${isMobileMenuOpen ? 'block w-fit' : 'hidden'} laptop-sm:block`}>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
