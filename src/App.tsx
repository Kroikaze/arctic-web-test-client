import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '@/components/Footer/Footer.tsx';

import Header from './components/Header/Header.tsx';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="h-100 bg-latte flex-grow">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ducimus
                    impedit maxime nam, nemo numquam reiciendis rerum. Fugit laudantium nostrum
                    numquam saepe! A, aut corporis cum fugit iusto magnam mollitia quidem similique
                    tempore? Alias architecto, commodi consequatur delectus deserunt dolore, dolorum
                    enim illo impedit in inventore itaque libero nihil nulla numquam odit officiis
                    optio quas qui quia quisquam quo ratione reprehenderit rerum sequi similique
                    suscipit ut vitae voluptatem voluptates. Adipisci aliquid assumenda culpa
                    cupiditate deserunt dolor, eveniet expedita iste libero magnam mollitia nostrum
                    reprehenderit sapiente? Ad, asperiores, assumenda consectetur deserunt doloribus
                    facilis molestias quasi qui quod suscipit, totam velit veritatis?
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
