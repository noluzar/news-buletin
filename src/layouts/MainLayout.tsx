import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import LatestArticles from "../components/LatestArticles";
import SportsNews from "../components/SportsNews";

const MainLayout: React.FC = () => {
    return(
        <div>
            <Navbar/>
            <Home/>
            <LatestArticles/>
            <SportsNews/>
        </div>
    )
};

export default MainLayout;