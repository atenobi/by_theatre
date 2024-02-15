import React from "react";

import "./index.css";
import Link from "../../page elements/link/Link";

const Footer = () => (
    <div className="footer_container">
        <div className="footer_bg">
            <div className="footer_logo_image"> 
            </div>
            <div className="footer_links">
                <Link element={"some_mail@gmail.com"} text={"Пошта"} />
                <Link element={"@t.me_by theatre"} text={"Тэлеграм"} />
                <Link element={"+472297397877398723"} text={"Нумар для сувязі"} />
                <Link element={"@insta"} text={"Інстаграм"} />
            </div>    
        </div>
    </div>
);

export default Footer;