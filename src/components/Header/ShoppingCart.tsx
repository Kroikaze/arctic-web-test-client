import ShoppingBag from '@/assets/Images/Shopping_bag.png';

const ShoppingCart = () => {
    return (
        <div className="flex items-center laptop-sm:order-[-1]">
            <img src={ShoppingBag} alt="Корзина" className="mr-2 w-6 h-6" />
            <div className="flex flex-col max-tablet-sm:hidden">
                <span className="text-xs">Корзина(5):</span>
                <span className="font-bold text-xs">34 000 $</span>
            </div>
        </div>
    );
};

export default ShoppingCart;
