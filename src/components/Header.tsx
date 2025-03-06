import CallBack from './CallBack.tsx';
import Logo from './Logo.tsx';
import Nav from './Nav.tsx';
import ShoppingCart from './ShoppingCart.tsx';

const Header = () => {
    return (
        <header className="bg-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <ShoppingCart />
                <Logo />
                <CallBack />
            </div>
            <Nav />
        </header>
    );
};

export default Header;
