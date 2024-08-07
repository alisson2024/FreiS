
import App from './pages/App'
import Sobre from './pages/sobre';
import Naoencontrado from './pages/naoencontrado';
import Ex1 from './pages/ex1';
import Ex2 from './pages/ex2';
import Ex3 from './pages/ex3';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/app' element={<App />} />
                <Route path='/ex1' element={<Ex1 />} />
                <Route path='/ex2' element={<Ex2 />} />
                <Route path='/ex3' element={<Ex3 />} />

                <Route path='*' element={<Naoencontrado />} />

            </Routes>
        </BrowserRouter>
    )
}