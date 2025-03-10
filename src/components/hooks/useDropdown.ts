import { useState } from 'react';

const useDropdown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const openDropdown = () => setDropdownOpen(true);
    const closeDropdown = () => setDropdownOpen(false);
    const toggleDropdown = () => setDropdownOpen(prev => !prev);

    return {
        isDropdownOpen,
        openDropdown,
        closeDropdown,
        toggleDropdown,
    };
};

export default useDropdown;
