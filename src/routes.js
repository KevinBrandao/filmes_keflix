import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error from './pages/Error.js';
import Favoritos from './pages/Favoritos/index.js';
import Filme from './pages/Filme';
import Home from './pages/Home';

import Header from './components/Header';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/filmes/:id" element={<Filme />} ></Route>
                <Route path='/favoritos' element={ <Favoritos /> } ></Route>

                <Route path="*" element={<Error />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;