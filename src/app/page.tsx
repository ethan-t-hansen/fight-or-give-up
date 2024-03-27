"use client";

import HomeSearch from './components/SearchBar'
import Navbar from './components/Navbar'


const Homepage = () => {

    return (
        <div>
            <Navbar/>
            <div className="home-wrap">
                <div className="spacer"/>
                <div className="title">
                    <h1>U-TRITION</h1>
                </div>
                <div className="subtitle">
                    Getting a hold on what you consume
                </div>
                <HomeSearch />
            </div>
        </div>
    )
}

export default Homepage
