import { Link } from 'react-router-dom';

const CallBack = () => {
    return (
        <div className="flex flex-col text-center">
            <span className="font-semibold text-2xl">8 (800) 302 79 15</span>
            <Link to="/callback" className="text-sm underline text-latte">
                Заказать обратный звонок
            </Link>
        </div>
    );
};

export default CallBack;
