import { faEvernote, faFacebookMessenger, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFaceSmile, faFileVideo, faFlag, faGamepad, faMemory, faPhotoFilm, faPhotoVideo, faRibbon, faSave, faUser, faUserGroup, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Head from "./Head";
import { Link, Route, Routes } from "react-router-dom";
import Video from "./Video";
import Friends from "./Friends";
import Home from "./Home";
import Group from "./Group";
import Game from "./Game";


function Header() {
    return(
    <div>
       
        <Head />
        <div className="dav">
            
            <div className="left">
            
                <Link to="/my-page"><button className="left1"><div className="name"><FontAwesomeIcon icon={faUser} /><span>  Aram</span></div></button></Link>
                <Link to="/friends"><button className="left1"><div ><FontAwesomeIcon icon={faUserGroup} /><span>Friend</span></div></button></Link>
                <Link to="/save"><button className="left1"><div ><FontAwesomeIcon icon={faSave} /><span>  Save</span></div></button></Link>
                <Link to="/group"><button className="left1"><div ><FontAwesomeIcon icon={faUsers} /><span>Group</span></div></button></Link>
                <Link to="/video"><button className="left1"><div ><FontAwesomeIcon icon={faFileVideo} /><span>Video</span></div></button></Link>
                <Link to="/games"><button className="left1"><div ><FontAwesomeIcon icon={faGamepad} /><span>Games</span></div></button></Link>
                <Link to="/messenger"><button className="left1"><div ><FontAwesomeIcon icon={faFacebookMessenger} /><span>Messenger</span></div></button></Link>
                <Link to="/photo"><button className="left1"><div ><FontAwesomeIcon icon={faPhotoFilm} /><span>Photo</span></div></button></Link>

            </div>
            <div>
                <Routes>
                    
                        <Route path='/home' Component={Home} />
                        <Route path='/video' Component={Video} />
                        <Route path='/friends' Component={Friends} />
                        <Route path='/group' Component={Group} />
                        <Route path='/game' Component={Game} />
                        
                </Routes>

            </div>
            <div className="end">
                <div className="contacts">
                    

                </div>
            </div>

        </div>
    </div>
    )
}

export default Header;