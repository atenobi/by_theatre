import React from "react";

import "./index.css";

import Button from "../../page elements/button/Button";

const Header = () => (
    <div className="header_container">
        <div className="header_menu">
            <Button element={'$'} text={"Падтрымка"} />
            <Button element={'$'} text={"Удзельнікі"} />
            <Button element={'$'} text={"Праекты"} />
            <Button element={'$'} text={"Кантакты"} />
        </div>  
        <div className="main_logo_container">
            <div className="main_logo"></div>
        </div>
        
           
    </div>
);

export default Header;