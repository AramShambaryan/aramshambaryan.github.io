import { faEvernote, faFacebookMessenger, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFaceSmile, faFileVideo, faFlag, faGamepad, faMemory, faPhotoFilm, faPhotoVideo, faRibbon, faSave, faUser, faUserGroup, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Head from "./Head";
import User from "./User";

function Header() {
    return(
    <div>
       
        <Head />
        <div className="dav">
            
            <div className="left">

                <button className="left1"><div className="name"><FontAwesomeIcon icon={faUser} /><span>  Aram</span></div></button>
                <button className="left1"><div ><FontAwesomeIcon icon={faUserGroup} /><span>Friend</span></div></button>
                <button className="left1"><div ><FontAwesomeIcon icon={faSave} /><span>  Save</span></div></button>
                <button className="left1"><div ><FontAwesomeIcon icon={faUsers} /><span>Group</span></div></button>
                <button className="left1"><div ><FontAwesomeIcon icon={faFileVideo} /><span>Video</span></div></button>
                <button className="left1"><div ><FontAwesomeIcon icon={faGamepad} /><span>Games</span></div></button>
                <button className="left1"><div ><FontAwesomeIcon icon={faFacebookMessenger} /><span>Messenger</span></div></button>
                <button className="left1"><div ><FontAwesomeIcon icon={faPhotoFilm} /><span>Photo</span></div></button>

            </div>
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
            <div className="end">
                <div className="contacts">
                    <User />

                </div>
            </div>

        </div>
    </div>
    )
}

export default Header;