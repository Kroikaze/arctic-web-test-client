import { FC } from 'react';
import { Link } from 'react-router-dom';

interface DropdownMenuProps {
    items: { text: string; link: string }[];
    className?: string;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ items, className }) => {
    return (
        <div
            className={`absolute -left-1 w-36 mt-4 bg-latte animate-fade-in max-laptop-sm:w-full ${className || ''}`}
        >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 rotate-45 w-4 h-4 bg-latte"></div>
            {items.map(item => (
                <Link
                    key={item.text}
                    to={item.link}
                    className="block px-4 py-2 text-sm text-white capitalize
                             hover:bg-gray-700
                             hover:text-yellow-400
                             hover:-translate-y-0.5
                             hover:shadow-md
                             transition-all duration-300
                             max-laptop-sm:text-center"
                >
                    {item.text}
                </Link>
            ))}
        </div>
    );
};

export default DropdownMenu;
