import { FC, ReactNode, useEffect, useRef } from 'react';

interface NavDropdownProps {
    callback: () => void;
    children: ReactNode;
}

const DropdownWrapper: FC<NavDropdownProps> = ({ children, callback }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <div ref={dropdownRef}>{children}</div>;
};

export default DropdownWrapper;
