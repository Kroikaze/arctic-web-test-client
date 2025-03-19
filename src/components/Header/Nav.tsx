import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import arrow from '@/assets/Images/Arrow.png';
import PopUp from '@/components/Header/PopUp.tsx';
import { navs } from '@/constants/navLinks.ts';

const Nav: FC = () => {
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const handleOpenDropdown = () => {
        setDropdownOpen(true);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const handleToggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    return (
        <nav className="bg-gray-100">
            <div className="container mx-auto flex justify-center gap-1">
                {navs.map(nav => {
                    if (nav.link === undefined) {
                        return (
                            <div
                                key={nav.text}
                                className="relative uppercase mx-3 py-6 cursor-pointer"
                                onMouseEnter={handleOpenDropdown}
                            >
                                <div
                                    onClick={handleToggleDropdown}
                                    className="font-semibold flex items-center"
                                >
                                    {nav.text}
                                    <img
                                        src={arrow}
                                        alt="arrow"
                                        className={`w-2 h-1 ml-2 duration-150 ${
                                            isDropdownOpen ? 'rotate-0' : 'rotate-180'
                                        }`}
                                    />
                                </div>
                                {isDropdownOpen && (
                                    <PopUp callback={closeDropdown}>
                                        <div className="absolute -left-6 w-36 mt-6 bg-latte animate-fade-in">
                                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 rotate-45 w-4 h-4 bg-latte"></div>

                                            <Link
                                                to="/watches/women"
                                                className="block capitalize px-4 py-2 text-sm text-white"
                                            >
                                                Женские часы
                                            </Link>
                                            <Link
                                                to="/watches/men"
                                                className="block capitalize px-4 py-2 text-sm text-white"
                                            >
                                                Мужские часы
                                            </Link>
                                        </div>
                                    </PopUp>
                                )}
                            </div>
                        );
                    }
                    return (
                        <Link
                            key={nav.text}
                            to={nav.link}
                            className="font-semibold uppercase mx-3 py-6"
                        >
                            {nav.text}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Nav;
