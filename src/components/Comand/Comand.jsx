import React from "react";
import { useState } from "react";
import "./index.css";

import comand from "../../content/comand/comand.js"
import icons from "../../page elements/ImageLink/icons.js";

import ImageLink from "../../page elements/ImageLink/ImageLink.jsx";

const Comand = () => { 
    let [member, setMember] = useState(0);
 
    const next = () => {
        if (member === (comand.length - 1)) {
            setMember(0);
        } else {
            setMember(++member);
        }
    }

    return (
        <>
            <div key={comand[member].bio} className="comand_container">
                <img src={comand[member].photo} alt={comand[member].surname} className="member_photo"/>
                <div className="comand_text_content">
                    <p className="comand_name">{comand[member].name} {comand[member].surname}</p>
                    <p className="comand_bio">{comand[member].bio}</p>
                    <button onClick={next} className="comand_button">
                    </button>
                    <div className="comand_links">
                    {comand[member].mail ? (
                        <>
                            <ImageLink element={comand[member].mail} image={icons.mail} img_alt={comand[member].name}/>
                       </>
                        ) : (
                        <>
                        </>
                        )}
                        {comand[member].insta ? (
                        <>
                            <ImageLink element={comand[member].insta} image={icons.insta} img_alt={comand[member].name}/>
                       </>
                        ) : (
                        <>
                        </>
                        )}
                    </div>
                </div>
            </div> 
        </>
        );
}

export default Comand;