import { FC, ReactNode, useEffect, useRef } from 'react';

interface NavDropdownProps {
    callback: () => void;
    children: ReactNode;
}

const DropdownWrapper: FC<NavDropdownProps> = ({ children, callback }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        console.log('start Nav');
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        console.log('listening on clickOutside up');

        return () => {
            console.log('remove nav');
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <div ref={dropdownRef}>{children}</div>;
};

export default DropdownWrapper;
