import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home';
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Questions from '../pages/Questions/Questions';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Navigation;