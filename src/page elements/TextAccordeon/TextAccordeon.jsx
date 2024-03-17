import React from 'react';
import {Accordion} from 'react-bootstrap';

import "./index.css";

function TextAccordeon({ title, text }) {
  return (
    <Accordion className='accordion_custom'>
      <Accordion.Item eventKey="0" className='accordion_custom_item'>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
            <p className="accordion_text">{text}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default TextAccordeon;
