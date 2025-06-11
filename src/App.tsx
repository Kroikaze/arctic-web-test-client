import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '@/Pages/HomePage.tsx';

import Layout from './components/Layout';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
