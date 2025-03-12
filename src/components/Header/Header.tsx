import Logo from './Logo.tsx';
import Nav from './Nav.tsx';
import RequestCall from './RequestCall.tsx';
import ShoppingCart from './ShoppingCart.tsx';

const Header = () => {
    return (
        <header className="bg-wite">
            <div className="container mx-auto flex justify-between item-center px-6 py-4">
                <ShoppingCart />
                <Logo />
                <RequestCall />
            </div>
            <Nav />
        </header>
    );
};

export default Header;
