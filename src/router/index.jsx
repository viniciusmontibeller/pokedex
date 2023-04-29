import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exatc path='/' element={<Home />} />
                <Route exatc path='/profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export { Router }