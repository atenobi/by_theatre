import React from "react";

import "./index.css";

const Button = ({ element, text, href }) => (
    <div className="button_container">
        <a className="button" link={element} href={href}>
            {text}
        </a>
    </div>
);

export default Button;