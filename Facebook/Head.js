import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookMessenger, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBell, faGamepad, faHome, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

function Head(){
    return(
        <header id="Head">
        <div id="left-div">
            <FontAwesomeIcon icon={faFacebook} />
            <input placeholder='search' />
        </div>
        <div id="center-div">
            <button className="home"><div className="na"><FontAwesomeIcon icon={faHome} /></div></button>
            <button className="camera"><div className="na"><FontAwesomeIcon icon={faSquareYoutube} /></div></button>
            <button className="group"><div className="na"><FontAwesomeIcon icon={faUsers} /></div></button>
            <button className="game"><div className="na"><FontAwesomeIcon icon={faGamepad} /></div></button>
        </div>
        <div id="end-div">
            <button className="but"><div className="pa"><FontAwesomeIcon icon={faFacebookMessenger} /></div></button>
            <button className="but"><div className="pa"><FontAwesomeIcon icon={faBell} /></div></button>
            <button className="but"><div className="pa"><FontAwesomeIcon icon={faUser} /></div></button>
        </div>
    </header>
    )
}

export default Head;