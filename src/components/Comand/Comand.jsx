import React from "react";
import { useState } from "react";
import "./index.css";

import comand from "../../content/comand/comand.js"

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
                    <div className="comand_links">
                        <ImageLink element={comand[member].mail} image={"/images/icons/mail_icon.svg"} img_alt={comand[member].name}/>
                        <ImageLink element={comand[member].insta} image={"/images/icons/insta_icon.svg"} img_alt={comand[member].name}/>
                    </div>
                </div>

                <button onClick={next} className="comand_button">
                    <img src="/images/icons/right-arrow.svg" alt="arrow" className="svg_icon"/>
                </button>
            </div> 
        </>
        );
}

export default Comand;