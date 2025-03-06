import { useState } from 'react';
import { Link } from 'react-router-dom';

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
];
const Nav = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <nav className="bg-gray-100 py-6">
            <div className="container mx-auto flex justify-center space-x-6">
                {navs.map((nav, index) => {
                    if (nav.link === undefined) {
                        return (
                            <div key={index} className="relative">
                                <button onClick={toggleDropdown} className="font-semibold">
                                    {nav.text}
                                    <span className="pl-2">{isDropdownOpen ? '∧' : '∨'}</span>
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute -left-6 w-36 mt-6 bg-custom_broun">
                                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-custom_broun"></div>

                                        <Link
                                            to="/watches/women"
                                            className="block px-4 py-2 text-sm text-white"
                                        >
                                            Женские часы
                                        </Link>
                                        <Link
                                            to="/watches/men"
                                            className="block px-4 py-2 text-sm text-white"
                                        >
                                            Мужские часы
                                        </Link>
                                    </div>
                                )}
                            </div>
                        );
                    }
                    return (
                        <Link key={index} to={nav.link} className="font-semibold">
                            {nav.text}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Nav;
