import React from 'react';
import ReactDom from "react-dom";

import "./SideDrawer.css";

const SideDrawer = props => {
    const content = < aside className = 'side-drawer' > {props.children} </aside>;
    
    {/*This <aside></aside> is rendered outside the root div, so here are the use of portals.*/}
    return ReactDom.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer;