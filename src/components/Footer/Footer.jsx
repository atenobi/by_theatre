import React from "react";

import "./index.css";
import Link from "../../page elements/link/Link";

const Footer = () => (
    <div className="footer_container">
        <div className="footer_bg">
            <div className="footer_logo_image"> 
            </div>
            <div className="footer_links">
                <Link element={`mailto:byteatar@gmail.com`} text={"Пошта"} />
                <Link element={"https://t.me/BYteatr"} text={"Тэлеграм"} />
                <Link element={"https://www.instagram.com/by.teatr/"} text={"Інстаграм"} />
                <Link element={"https://m.facebook.com/profile.php?id=100090755918014"} text={"Фэйсбук"} />
                <Link element={`tel:+48518445425`} text={"Нумар для сувязі"} />
            </div>    
        </div>
    </div>
);

export default Footer;