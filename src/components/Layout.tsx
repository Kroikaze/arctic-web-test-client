import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer/Footer.tsx';
import Header from '@/components/Header/Header.tsx';

const Layout = () => {
    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Header />
            <main className="container mx-auto p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
