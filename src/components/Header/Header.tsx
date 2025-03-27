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
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <button onClick={toggleMobileMenu} className="text-2xl laptop-sm:hidden">
                    ☰
                </button>
                <Logo />
                <div className="hidden laptop-sm:block">
                    <RequestCall />
                </div>
                <ShoppingCart />
            </div>

            <div
                className={`${isMobileMenuOpen ? 'block w-fit' : 'hidden'} laptop-sm:block laptop-sm:w-full`}
            >
                <Nav />
            </div>
        </header>
    );
};

export default Header;
