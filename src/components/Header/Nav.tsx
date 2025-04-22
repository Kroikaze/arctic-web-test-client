import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

import arrow from '@/assets/Images/Arrow.png';
import DropdownMenu from '@/components/Header/DropdownMenu.tsx';
import RequestCall from '@/components/Header/RequestCall.tsx';
import { navs } from '@/constants/navLinks.ts';
import useScreenSize from '@/hooks/useScreenSize.ts';

interface NavProps {
    isMobileOpen?: boolean;
}

const Nav: FC<NavProps> = ({ isMobileOpen = false }) => {
    const { BigScreen } = useScreenSize();
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const divRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [portalPosition, setPortalPosition] = useState({ top: 0, left: 0, width: 0 });

    useEffect(() => {
        const handleScroll = () => {
            if (divRef.current) {
                const rect = divRef.current.getBoundingClientRect();
                console.log('Координати:', {
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                });
                setPortalPosition({
                    top: rect.bottom + window.scrollY,
                    left: rect.left + window.scrollX,
                    width: rect.width,
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            container?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const portalDropdown = (
        <div
            style={{
                position: 'fixed',
                top: `${portalPosition.top}px`,
                left: `${portalPosition.left}px`,
                width: `${portalPosition.width}px`,
                backgroundColor: 'white',
                border: '1px solid red',
                zIndex: 1000,
            }}
        >
            <DropdownMenu
                items={[
                    { text: 'Женские часы', link: '/watches/women' },
                    { text: 'Мужские часы', link: '/watches/men' },
                ]}
            />
        </div>
    );

    return (
        <nav
            className={`
                ${isMobileOpen ? 'fixed top-0 left-0' : ''} 
                ${!isMobileOpen && !BigScreen ? 'hidden' : 'block'}
                laptop-sm:w-full
                bg-gray-100
                `}
        >
            <div
                ref={containerRef}
                className="container mx-auto flex flex-col items-start  gap-1
                    laptop-sm:flex-row
                    laptop-sm:items-center
                    laptop-sm:justify-between
                    max-laptop-sm:overflow-y-auto
                    max-laptop-sm:max-h-screen"
            >
                {navs.map(nav => {
                    if (nav.link === undefined) {
                        return (
                            <div
                                ref={divRef}
                                key={nav.text}
                                className="relative uppercase p-4 cursor-pointer max-laptop-sm:w-full group"
                                onClick={() => !BigScreen && setDropdownOpen(!isDropdownOpen)}
                            >
                                <div className="font-semibold flex items-center">
                                    {nav.text}
                                    <img
                                        src={arrow}
                                        alt="arrow"
                                        className="w-2 h-1 ml-2 duration-150 group-hover:rotate-0 rotate-180"
                                    />
                                </div>
                                {BigScreen && (
                                    <DropdownMenu
                                        items={[
                                            { text: 'Женские часы', link: '/watches/women' },
                                            { text: 'Мужские часы', link: '/watches/men' },
                                        ]}
                                        className={`
                                              ${BigScreen ? 'hidden group-hover:block' : ''} 
                                              ${isDropdownOpen ? 'block' : 'hidden'}
                                            `}
                                    />
                                )}
                                {!BigScreen &&
                                    isDropdownOpen &&
                                    createPortal(portalDropdown, document.body)}
                            </div>
                        );
                    }
                    return (
                        <Link
                            key={nav.text}
                            to={nav.link}
                            className="font-semibold uppercase p-4 max-laptop-sm:w-full"
                        >
                            {nav.text}
                        </Link>
                    );
                })}
                {isMobileOpen && !BigScreen && (
                    <RequestCall externalClasses="flex mx-3 py-6 border-t border-gray-800" />
                )}
            </div>
        </nav>
    );
};

export default Nav;
