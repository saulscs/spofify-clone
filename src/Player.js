import React from "react";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

import "./Player.css";

function Player({spotify}) {
    return (
        <div className="plaeyer">
            <div className="player__body">
                <Sidebar/>
                <Body/>
            </div>
            <Footer/>
        </div>
    )
}

export default Player;
