import { FC } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
    externalClasses?: string;
}
const Logo: FC<LogoProps> = ({ externalClasses = ' ' }) => {
    return (
        <Link to="/" className="flex flex-col text-center">
            <h1 className={`text-4xl ${externalClasses}`}>NEVA TIME</h1>
            <p className={`max-tablet-sm:hidden ${externalClasses}`}>
                Фирменные аксессуары Michael Kors
                <br />с доставкой
            </p>
        </Link>
    );
};

export default Logo;
