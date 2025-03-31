import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '@/components/Footer/Footer.tsx';

import Header from './components/Header/Header.tsx';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="h-100 bg-latte">content</div>
            <Footer />
        </Router>
    );
};

export default App;
