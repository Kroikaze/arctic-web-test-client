import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import arrow from '@/assets/Images/Arrow.png';
import DropdownMenu from '@/components/Header/DropdownMenu.tsx';
import DropdownWrapper from '@/components/Header/DropdownWrapper.tsx';
import RequestCall from '@/components/Header/RequestCall.tsx';
import { navs } from '@/constants/navLinks.ts';
import useScreenSize from '@/hooks/useScreenSize.ts';

interface NavProps {
    isMobileOpen?: boolean;
}

const Nav: FC<NavProps> = ({ isMobileOpen = false }) => {
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const { isLaptopSm } = useScreenSize();

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
        <nav
            className={`
                ${isMobileOpen ? 'block w-fit' : 'hidden'} 
                laptop-sm:block laptop-sm:w-full 
                bg-gray-100
                `}
        >
            <div
                className="container mx-auto px-6 flex flex-col items-start  gap-1
                    laptop-sm:flex-row
                    laptop-sm:items-center
                    laptop-sm:justify-between"
            >
                {navs.map(nav => {
                    if (nav.link === undefined) {
                        return (
                            <div
                                key={nav.text}
                                className="relative uppercase mx-3 cursor-pointer"
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
                                    <DropdownWrapper callback={closeDropdown}>
                                        <DropdownMenu
                                            items={[
                                                { text: 'Женские часы', link: '/watches/women' },
                                                { text: 'Мужские часы', link: '/watches/men' },
                                            ]}
                                            callback={closeDropdown}
                                        />
                                    </DropdownWrapper>
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
                {isMobileOpen && !isLaptopSm && (
                    <RequestCall externalClasses="flex mx-3 py-6 border-t border-gray-800" />
                )}
            </div>
        </nav>
    );
};

export default Nav;
