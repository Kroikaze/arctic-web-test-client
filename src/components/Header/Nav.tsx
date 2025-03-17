import { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import arrow from '@/assets/Images/Arrow.png';
import NavDropdown from '@/components/Header/NavDropdown.tsx';
import { navs } from '@/constants/navLinks.ts';

const Nav: FC = () => {
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleOpenDropdown = () => {
        // console.log('handleOpenDropdown');
        setDropdownOpen(true);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const handleToggleDropdown = () => {
        // console.log('handleToggleDropdown');
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
                                ref={dropdownRef}
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
                                {isDropdownOpen && <NavDropdown />}
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
