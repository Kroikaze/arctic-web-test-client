import ShoppingBag from '@/assets/Images/Shopping_bag.png';

const ShoppingCart = () => {
    return (
        <div className="flex items-center">
            <img src={ShoppingBag} alt="Корзина" className="mr-2 w-6 h-6" />
            <div className="hidden xl:flex flex-col items-start">
                <span className="text-xs lg:text-sm">Корзина(5):</span>
                <span className="font-bold text-xs lg:text-sm">34 000 $</span>
            </div>
        </div>
    );
};

export default ShoppingCart;
