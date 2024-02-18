import React from "react";

import "./index.css";
import Link from "../../page elements/link/Link";

const Footer = () => (
    <div className="footer_container">
        <div className="footer_bg">
            <div className="footer_logo_image"> 
            </div>
            <div className="footer_links">
                <Link element={`mailto:andrei.novik89@mail.ru`} text={"Пошта"} />
                <Link element={"https://t.me/BYteatr"} text={"Тэлеграм"} />
                <Link element={`tel:+48518445425`} text={"Нумар для сувязі"} />
                <Link element={"https://www.instagram.com/by.teatr/"} text={"Інстаграм"} />
            </div>    
        </div>
    </div>
);

export default Footer;