import { useRef } from 'react';

import useClickOutside from '@/components/hooks/useClickOutside.ts';
import useDropdown from '@/components/hooks/useDropdown.ts';

import CallBackPopup from './RequestCallPopUp.tsx';

const RequestCall = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    const { isDropdownOpen, openDropdown, closeDropdown } = useDropdown();
    useClickOutside(dropdownRef, () => {
        closeDropdown();
    });

    return (
        <div className="flex flex-col text-center relative">
            <a href="tel:88003027915" className="font-semibold text-2xl">
                8 (800) 302 79 15
            </a>

            <span
                className="text-sm underline text-latte pb-3 cursor-pointer"
                onMouseEnter={openDropdown}
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
