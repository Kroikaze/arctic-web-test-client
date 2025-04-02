import { FC } from 'react';

import FooterList from '@/components/Footer/FooterList.tsx';
import Logo from '@/components/Header/Logo.tsx';

import EmailSubscribe from './EmailSubscribe';

const Footer: FC = () => {
    const leftItems = [
        { text: 'Женские\nчасы', link: '/watches/women' },
        { text: 'Мужские\nчасы', link: '/watches/men' },
        { text: 'Сумки', link: '/bags' },
        { text: 'Рюкзаки', link: '/backpacks' },
        { text: 'Кошельки', link: '/wallets' },
        { text: 'Браслеты', link: '/bracelets' },
    ];

    const rightItems = [
        { text: 'Гарантия' },
        { text: 'Доставка' },
        { text: 'Отзывы' },
        { text: 'Другие бренды' },
        { text: 'Корпоративные подарки' },
        { text: 'О компании' },
    ];

    return (
        <div className="bg-black">
            <div className="container mx-auto flex justify-between ">
                <div className="flex-col">
                    <Logo externalClasses="text-white text-left" />
                    <EmailSubscribe />
                </div>
                <div className="grid grid-cols-2 gap-16 max-laptop-sm:gap-8">
                    <FooterList items={leftItems} />
                    <FooterList items={rightItems} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
