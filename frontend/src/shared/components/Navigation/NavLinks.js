import React from 'react'
import { NavLink } from "react-router-dom";

import "./NavLinks.css"

const NavLinks = () => {
  return (
    <ul className="nav-links">

            {/* The routes are fake/dummy later these will be replaced based on the data fetched by Mongodb database */}

        <li>
            <NavLink to="/" end>ALL USERS</NavLink>
        </li>
        <li>
            <NavLink to="/u1/blogs">MY Blogs</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
        <li>
            <NavLink to="/blogs">AUTHENTICATE</NavLink>
        </li>
    </ul>
  )
}

export default NavLinks;
