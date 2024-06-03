import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Group(){
    return(
        <div>
            <div>
                <div className="right-gr">
                    <h1>Group</h1>
                    <button className="gr-bt"><FontAwesomeIcon icon={faGear} /></button>
                </div>
                <input placeholder="search group" />
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Group;