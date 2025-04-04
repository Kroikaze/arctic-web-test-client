import { useEffect, useState } from 'react';

const useScreenSize = () => {
    const [BigScreen, setBigScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setBigScreen(window.innerWidth >= 1366);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return { BigScreen };
};

export default useScreenSize;
