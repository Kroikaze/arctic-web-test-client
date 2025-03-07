import { useState } from 'react';
import { Link } from 'react-router-dom';

import arrow from '@/assets/Images/Arrow.png';
import { navs } from '@/constants/navLinks.ts';

const Nav = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <nav className="bg-gray-100 py-6">
            <div className="container mx-auto flex justify-center space-x-6">
                {navs.map((nav, index) => {
                    if (nav.link === undefined) {
                        return (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <button
                                    onClick={toggleDropdown}
                                    className="font-semibold flex items-center"
                                >
                                    {nav.text}
                                    <img
                                        src={arrow}
                                        alt="arrow"
                                        className={`w-2 h-1 ml-2 duration-500 opacity-100 ${
                                            isDropdownOpen ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    />
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute -left-6 w-36 mt-6 bg-custom_brown">
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 rotate-45 w-4 h-4 bg-custom_brown"></div>

                                        <Link
                                            to="/watches/women"
                                            className="block px-4 py-2 text-sm text-white"
                                        >
                                            Женские часы
                                        </Link>
                                        <Link
                                            to="/watches/men"
                                            className="block px-4 py-2 text-sm text-white"
                                        >
                                            Мужские часы
                                        </Link>
                                    </div>
                                )}
                                <div className="absolute -left-6 -right-14 h-6"></div>
                            </div>
                        );
                    }
                    return (
                        <Link key={index} to={nav.link} className="font-semibold">
                            {nav.text}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Nav;
