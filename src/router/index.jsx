import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exatc path='/' element={<Home />} />
                <Route exatc path='/details/:name' element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export { Router }