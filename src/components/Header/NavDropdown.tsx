import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NavDropdownProps {
    dropdownRef: React.RefObject<HTMLDivElement | null>;
    callback: () => void;
}

const NavDropdown: FC<NavDropdownProps> = ({ dropdownRef, callback }) => {
    useEffect(() => {
        console.log('start Nav');
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        console.log('listening on clickOutside up');

        return () => {
            console.log('remove nav');
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef, callback]);

    return (
        <div className="absolute -left-6 w-36 mt-6 bg-latte animate-fade-in" ref={dropdownRef}>
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
