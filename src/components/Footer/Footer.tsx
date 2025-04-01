import { FC } from 'react';

import Logo from '@/components/Header/Logo.tsx';

import EmailSubscribe from './EmailSubscribe';

const Footer: FC = () => {
    return (
        <div className="bg-black">
            <div className="container mx-auto flex justify-between ">
                <div className="flex-col">
                    <Logo externalClasses="text-white text-left font-light" />
                    <EmailSubscribe />
                </div>
            </div>
        </div>
    );
};

export default Footer;
