import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header.tsx';

const App = () => {
    return (
        <Router>
            <Header />
        </Router>
    );
};

export default App;
