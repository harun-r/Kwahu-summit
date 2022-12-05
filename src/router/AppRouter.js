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
import NewsDetailPage from "../pages/news-detail-page/NewsDetailPage";
import NewDetailPage2 from "../pages/news-detail-page/NewDetailPage2";
import NewDetailPage3 from "../pages/news-detail-page/NewDetailPage3";
import NewDetailPage4 from "../pages/news-detail-page/NewDetailPage4";
import NewDetailPage5 from "../pages/news-detail-page/NewDetailPage5";
import NewDetailPage6 from "../pages/news-detail-page/NewDetailPage6";
import TheAfcta from "../pages/the-afcta/TheAfcta";
import AgendaPage from "../pages/agenda-page/AgendaPage";
import PeduasePage from "../pages/peduase-page/PeduasePage";
import AccraPage from "../pages/accra-page/AccraPage";
import ProtocolsPage from "../pages/protocols-page/ProtocolsPage";
import HelpPage from "../pages/help-page/HelpPage";
import GalleryPage from "../pages/gallery-page/GalleryPage";

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
                <Route path="/news-detail" element={<NewsDetailPage/>} />
                <Route path="/news-detail-2" element={<NewDetailPage2/>} />
                <Route path="/news-detail-3" element={<NewDetailPage3/>} />
                <Route path="/news-detail-4" element={<NewDetailPage4/>} />
                <Route path="/news-detail-5" element={<NewDetailPage5/>} />
                <Route path="/news-detail-6" element={<NewDetailPage6/>} />
                <Route path="/the-afcfta" element={<TheAfcta/>} />
                <Route path="/agenda" element={<AgendaPage/>} />
                <Route path="/peduase" element={<PeduasePage/>} />
                <Route path="/accra" element={<AccraPage/>} />
                <Route path="/protocols" element={<ProtocolsPage/>} />
                <Route path="/help" element={<HelpPage/>} />
                <Route path="/gallery" element={<GalleryPage/>} />
            </Routes>
        </Fragment>
    );
};

export default AppRouter;
