import { FC, useEffect, useRef, useState } from 'react';

import CallBackPopup from './RequestCallPopUp.tsx';

const RequestCall: FC = () => {
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleOpenDropdown = () => {
        setDropdownOpen(true);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    useEffect(() => {
        console.log('start');
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown();
                console.log('ClickOutside click outside event Request');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            console.log('remove click outside event Request');
        };
    }, [dropdownRef, closeDropdown]);

    return (
        <div className="flex flex-col text-center relative">
            <a href="tel:88003027915" className="font-semibold text-2xl">
                8 (800) 302 79 15
            </a>

            <span
                className="text-sm underline text-latte pb-3 cursor-pointer"
                onMouseEnter={handleOpenDropdown}
            >
                Заказать обратный звонок
            </span>

            <CallBackPopup
                isOpen={isDropdownOpen}
                onClose={closeDropdown}
                dropdownRef={dropdownRef}
            />
        </div>
    );
};

export default RequestCall;
