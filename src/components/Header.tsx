import { Link } from 'react-router-dom';

import Logo from './Logo.tsx';
import Nav from './Nav.tsx';
import ShoppingCart from './ShoppingCart.tsx';

const Header = () => {
    return (
        <header className="bg-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <ShoppingCart />
                <Logo />
                <div className="flex flex-col text-center">
                    <span className="font-semibold text-2xl">8 (800) 302 79 15</span>
                    <Link to="/callback" className="text-sm underline text-[#CDB494]">
                        Заказать обратный звонок
                    </Link>
                </div>
            </div>
            <Nav />
        </header>
    );
};

export default Header;
