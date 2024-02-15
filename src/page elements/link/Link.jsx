import React from "react";

import "./index.css";

const Link = ({ element, text }) => (
    <div className="link_container">
        <a className="link" href={element}>
            {text}
        </a>
    </div>
);

export default Link;