import CallBack from './CallBack.tsx';
import Logo from './Logo.tsx';
import Nav from './Nav.tsx';
import ShoppingCart from './ShoppingCart.tsx';

const Header = () => {
    return (
        <header className="bg-white">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <ShoppingCart />
                <Logo />
                <CallBack />
            </div>
            <Nav />
        </header>
    );
};

export default Header;
