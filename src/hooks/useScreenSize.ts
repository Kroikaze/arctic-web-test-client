import { useEffect, useState } from 'react';

const useScreenSize = () => {
    const [isLaptopSm, setIsLaptopSm] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLaptopSm(window.innerWidth >= 1366);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return { isLaptopSm };
};

export default useScreenSize;
