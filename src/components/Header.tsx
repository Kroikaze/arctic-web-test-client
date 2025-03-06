import { Link } from 'react-router-dom';

import ShoppingBag from '../assets/Images/Shopping_bag.png';
import Nav from './Nav.tsx';

const Header = () => {
    return (
        <header className="bg-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center">
                    <img src={ShoppingBag} alt="Корзина" className="mr-2" />
                    <div className="flex flex-col items-start">
                        <span className="text-sm">Корзина(5):</span>
                        <span className="font-bold">34 000 $</span>
                    </div>
                </div>

                <div className="flex flex-col text-center">
                    <h1 className="text-4xl">NEVA TIME</h1>
                    <p className="text-sm">
                        Фирменные аксессуары Michael Kors
                        <br />с доставкой
                    </p>
                </div>
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
