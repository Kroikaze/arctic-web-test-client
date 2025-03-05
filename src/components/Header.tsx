import { Link } from 'react-router-dom';
import ShoppingBag from "../assets/Images/Shopping_bag.png"

const navs = [
    {
        text: 'Главная',
        link: '/main',
    },
    {
        text: 'Часы',
    },
    {
        text: 'Сумки',
        link: '/bags',
    },
    {
        text: 'Рюкзаки',
        link: '/backpacks',
    },
    {
        text: 'Кошельки',
        link: '/wallets',
    },
    {
        text: 'Браслеты',
        link: '/bracelets',
    },
    {
        text: 'Гарантия',
        link: '/guarantee',
    },
    {
        text: 'Доставка',
        link: '/delivery',
    },
    {
        text: 'Отзывы',
        link: '/reviews',
    },
    {
        text: 'Для покупателей',
        link: '/forBuyers',
    },
]
const Header = () => {
    return (
        <header className="bg-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">

                <div className="flex items-center">
                    <img
                        src={ShoppingBag}
                        alt="Корзина"
                        className="mr-2"
                    />
                    <div className="flex flex-col items-start">
                        <span className="text-sm">Корзина(5):</span>
                        <span className="font-bold">34 000 $</span>
                    </div>
                </div>

                <div className="flex flex-col text-center">
                     <h1 className="text-4xl">NEVA TIME</h1>
                    <p className="text-sm">Фирменные аксессуары Michael Kors<br />с доставкой</p>
                </div>
                <div className="flex flex-col text-center">
                    <span className="font-semibold text-2xl">8 (800) 302 79 15</span>
                    <Link to="/callback" className="text-sm underline text-[#CDB494]">Заказать обратный звонок</Link>
                </div>
            </div>

            <nav className="bg-gray-100 py-6">
                <div className="container mx-auto flex justify-center space-x-6">
                    {navs.map((nav) => {
                        if (nav.link === undefined) {
                            return (
                                <button className="font-semibold">
                                    {nav.text}
                                </button>
                            )}
                        return <Link  to={nav.link} className="font-semibold">
                            {nav.text}
                        </Link>
                        }
                        )}
                </div>
            </nav>
        </header>
);
};

export default Header;