import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {

  // This <aside></aside> is rendered outside the root div, so here are the use of portals.
  return ReactDOM.createPortal(
    <div className="backdrop"  onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
