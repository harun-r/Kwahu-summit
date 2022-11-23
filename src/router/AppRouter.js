import React, {Fragment} from 'react';
import {Route, Routes} from "react-router-dom";

//Router Pages
import HomePage from "../pages/home-page/HomePage";

const AppRouter = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage/>} />
            </Routes>
        </Fragment>
    );
};

export default AppRouter;
