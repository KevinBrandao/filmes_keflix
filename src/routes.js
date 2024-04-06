import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Error from './pages/Error.js';

import Header from './components/Header';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/filmes/:id" element={<Filme />} ></Route>
                <Route path="*" element={<Error />} ></Route>
            </Routes>
        </BrowserRouter>
    )    
}

export default RoutesApp;