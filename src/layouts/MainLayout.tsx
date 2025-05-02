import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import LatestArticles from "../components/LatestArticles";
import SportsNews from "../components/SportsNews";
import Footer from "../components/Footer";
import Creators from "../components/Creators";
import WeeklyHighlight from "../components/WeeklyHighlight";

const MainLayout: React.FC = () => {
    return(
        <div>
            <Navbar/>
            <Home/>
            <LatestArticles/>
            <SportsNews/>
            <WeeklyHighlight/>
            <Creators/>
            <Footer/>
        </div>
    )
};

export default MainLayout;