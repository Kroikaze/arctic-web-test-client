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
    return (
        <nav className="bg-gray-100 py-6">
            <div className="container mx-auto flex justify-center space-x-6">
                {navs.map((nav, index) => {
                    if (nav.link === undefined) {
                        return (
                            <button key={index} className="font-semibold">
                                {nav.text}
                            </button>
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
