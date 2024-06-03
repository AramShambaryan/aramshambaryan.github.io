import { faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Video() {
    return(
        <div className="videoset-div">
            <div>
                <div className="non">
                    <h1>Video</h1>
                    <button className="Gear"><FontAwesomeIcon icon={faGear} /></button>
                </div>
                <input placeholder="search video" />
                <button><FontAwesomeIcon icon={faHome} /></button>
            </div>
            <div className="video-div">

            </div>
        </div>
    )

}

export default Video;