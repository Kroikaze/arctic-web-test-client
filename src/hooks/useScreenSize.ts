import { useEffect, useState } from 'react';

const useScreenSize = () => {
    const [isBigScreen, setIsBigScreen] = useState<boolean>(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsBigScreen(window.innerWidth >= 1366);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return { isBigScreen };
};

export default useScreenSize;
