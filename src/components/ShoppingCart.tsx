import ShoppingBag from '@/assets/Images/Shopping_bag.png';

const ShoppingCart = () => {
    return (
        <div className="flex items-center">
            <img src={ShoppingBag} alt="Корзина" className="mr-2" />
            <div className="flex flex-col items-start">
                <span className="text-sm">Корзина(5):</span>
                <span className="font-bold">34 000 $</span>
            </div>
        </div>
    );
};

export default ShoppingCart;
