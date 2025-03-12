import { RefObject, useEffect } from 'react';

const useClickOutside = (ref: RefObject<HTMLElement | null>, callback: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
                console.log('ClickOutside click outside event');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            console.log('remove click outside event');
        };
    }, [ref, callback]);
};

export default useClickOutside;
