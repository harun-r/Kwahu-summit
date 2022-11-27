import React, {Fragment} from 'react';
import {Route, Routes} from "react-router-dom";

//Router Pages
import HomePage from "../pages/home-page/HomePage";
import AboutSummitPage from "../pages/about-summit/AboutSummitPage";

const AppRouter = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about-summit" element={<AboutSummitPage/>} />
            </Routes>
        </Fragment>
    );
};

export default AppRouter;
