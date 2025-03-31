import { FC } from 'react';

interface LogoProps {
    externalClasses?: string;
}
const Logo: FC<LogoProps> = ({ externalClasses = ' ' }) => {
    return (
        <div className="flex flex-col text-center">
            <h1 className={`text-4xl ${externalClasses}`}>NEVA TIME</h1>
            <p className={`max-tablet-sm:hidden ${externalClasses}`}>
                Фирменные аксессуары Michael Kors
                <br />с доставкой
            </p>
        </div>
    );
};

export default Logo;
