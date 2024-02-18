import React from "react";

import "./index.css";

const ImageLink = ({ element, image, img_alt }) => {
    return (
    <>
        <a className="image_link" href={element}>
            <img src={image} alt={img_alt} className="svg_link_image"/>
        </a>
    </>
    );
};

export default ImageLink;