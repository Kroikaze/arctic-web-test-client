import { FC } from 'react';

import Logo from '@/components/Header/Logo.tsx';

const Footer: FC = () => {
    return (
        <div className="bg-black">
            <div className="container mx-auto flex justify-between ">
                <Logo externalClasses="text-white text-left" />
            </div>
        </div>
    );
};

export default Footer;
