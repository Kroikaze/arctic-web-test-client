import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavDropdown: FC = ({ ref, callback }) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown();
                console.log('111 ClickOutside click outside event');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            console.log('111 remove click outside event');
        };
    }, [dropdownRef, closeDropdown]);

    return (
        <div className="absolute -left-6 w-36 mt-6 bg-latte animate-fade-in">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 rotate-45 w-4 h-4 bg-latte"></div>

            <Link to="/watches/women" className="block capitalize px-4 py-2 text-sm text-white">
                Женские часы
            </Link>
            <Link to="/watches/men" className="block capitalize px-4 py-2 text-sm text-white">
                Мужские часы
            </Link>
        </div>
    );
};

export default NavDropdown;
