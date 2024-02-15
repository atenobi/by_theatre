import React from "react";

import "./index.css";

const Button = ({ element, text }) => (
    <div className="button_container">
        <button className="button" link={element}>
            {text}
        </button>
    </div>
);

export default Button;