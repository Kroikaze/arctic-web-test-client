import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" className="flex flex-col text-center">
            <h1 className="text-2xl">NEVA TIME</h1>
            <p className="max-tablet-sm:hidden">
                Фирменные аксессуары Michael Kors
                <br />с доставкой
            </p>
        </Link>
    );
};

export default Logo;
