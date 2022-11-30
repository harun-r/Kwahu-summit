import React, {Fragment} from 'react';
import {Route, Routes} from "react-router-dom";

//Router Pages
import HomePage from "../pages/home-page/HomePage";
import AboutSummitPage from "../pages/about-summit/AboutSummitPage";
import SpeakerPage from "../pages/speaker-page/SpeakerPage";
import SpeakersPage2 from "../pages/speakers-page-2/SpeakersPage2";
import SponsorsPage from "../pages/sponsors-page/SponsorsPage";
import HostPage from "../pages/host-page/HostPage";
import NewsPage from "../pages/news-page/NewsPage";
import PlanningCommitteePage from "../pages/planning-committee-page/PlanningCommitteePage";
const AppRouter = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about-summit" element={<AboutSummitPage/>} />
                <Route path="/speakers" element={<SpeakerPage/>} />
                <Route path="/invited-personalities" element={<SpeakersPage2/>} />
                <Route path="/sponsors" element={<SponsorsPage/>} />
                <Route path="/the-host" element={<HostPage/>} />
                <Route path="/news" element={<NewsPage/>} />
                <Route path="/planning-committee" element={<PlanningCommitteePage/>} />
            </Routes>
        </Fragment>
    );
};

export default AppRouter;
