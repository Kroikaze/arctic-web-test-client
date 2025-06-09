import { FC } from 'react';

import YoutubeIcon from '@/assets/Images/YoutubeIcon.png';
import FooterList from '@/components/Footer/FooterList.tsx';
import Logo from '@/components/Header/Logo.tsx';
import RequestCall from '@/components/Header/RequestCall.tsx';

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
            <div
                className="container mx-auto flex flex-col gap-12 justify-between p-4
                            laptop-sm:flex-row
                            laptop-sm:py-12"
            >
                <div className="flex-col gap-6 max-w-80">
                    <Logo externalClasses="text-white text-left" />
                    <EmailSubscribe />
                </div>

                <div className="grid grid-cols-2 gap-16">
                    <FooterList items={leftItems} />
                    <FooterList items={rightItems} />
                </div>

                <div className="flex-col justify-between ">
                    <RequestCall externalClasses="text-white" />
                    <div className="flex justify-center laptop-sm:justify-end gap-2">
                        <img
                            src={YoutubeIcon}
                            alt="YouTube"
                            className="p-1.5 bg-latte rounded-full w-8 h-8"
                        />
                        <img
                            src={YoutubeIcon}
                            alt="another YouTube"
                            className="p-1.5 bg-latte rounded-full w-8 h-8"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
