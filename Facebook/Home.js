import { faFaceSmile, faPhotoVideo, faUser, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
            <div className="center">
                <div className="center-prof">
                    <button className="ss"><FontAwesomeIcon icon={faUser} /></button>
                    <button className="nn"><span>New</span></button>
                    <hr></hr>
                    <button className="video"><FontAwesomeIcon icon={faVideo} /></button>
                    <button className="photovideo"><FontAwesomeIcon icon={faPhotoVideo} /></button>
                    <button className="facesmile"><FontAwesomeIcon icon={faFaceSmile} /></button>
                </div>
            </div>
    )
}
export default Home;