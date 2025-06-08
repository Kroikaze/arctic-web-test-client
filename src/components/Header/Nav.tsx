import { FC, useCallback, useEffect, useRef, useState } from 'react';
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
    const { isBigScreen } = useScreenSize();
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const divRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const portalRef = useRef<HTMLDivElement>(null);

    const updatePortalPosition = useCallback(() => {
        if (!divRef.current || !portalRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        const portal = portalRef.current;

        // Безпосереднє оновлення стилів порталу, без React-стану
        portal.style.transform = `translate(${rect.left}px, ${rect.bottom}px)`;
        portal.style.width = `${rect.width}px`;
    }, []);

    const handleToggleDropdown = () => {
        if (!isBigScreen) {
            setDropdownOpen(prevState => !prevState);
        }
    };

    useEffect(() => {
        if (!isDropdownOpen || !portalRef.current) return;

        const handleScroll = () => {
            requestAnimationFrame(updatePortalPosition);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        const container = containerRef.current;
        container?.addEventListener('scroll', handleScroll, { passive: true });

        // Викликаємо лише якщо елемент точно є
        requestAnimationFrame(() => {
            if (portalRef.current?.offsetWidth && portalRef.current.offsetWidth > 0) {
                updatePortalPosition();
            } else {
                // fallback через кадр, якщо ще не відрендерилось повністю
                requestAnimationFrame(updatePortalPosition);
            }
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            container?.removeEventListener('scroll', handleScroll);
        };
    }, [isDropdownOpen, updatePortalPosition]);

    const portalDropdown = (
        <div
            ref={portalRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 0,
                transform: 'translate(0, 0)',
                backgroundColor: 'white',
                zIndex: 1000,
                willChange: 'transform',
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
                ${!isMobileOpen && !isBigScreen ? 'hidden' : 'block'}
                laptop-sm:w-full
                bg-gray-100
                `}
        >
            <div
                ref={containerRef}
                className="container mx-auto flex flex-col items-start gap-1
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
                                onClick={handleToggleDropdown}
                            >
                                <div className="font-semibold flex items-center">
                                    {nav.text}
                                    <img
                                        src={arrow}
                                        alt="arrow"
                                        className="w-2 h-1 ml-2 duration-150 group-hover:rotate-0 rotate-180"
                                    />
                                </div>
                                {isBigScreen && (
                                    <DropdownMenu
                                        items={[
                                            { text: 'Женские часы', link: '/watches/women' },
                                            { text: 'Мужские часы', link: '/watches/men' },
                                        ]}
                                        className={`
                                            ${isBigScreen ? 'hidden group-hover:block' : ''} 
                                            ${isDropdownOpen ? 'block' : 'hidden'}
                                        `}
                                    />
                                )}
                                {!isBigScreen &&
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
                {isMobileOpen && !isBigScreen && (
                    <RequestCall externalClasses="flex mx-3 py-6 border-t border-gray-800" />
                )}
            </div>
        </nav>
    );
};

export default Nav;
