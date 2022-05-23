import React from 'react';
import {Link} from "react-router-dom"

import "./UserItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

const UserItem = (props) =>{
    return(
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/blogs`} >
                <div className="user-item__image">
                    <Avatar image={props.image} alt={props.name} />
                </div>
                <div className="user-item__info">
                    <h2> {props.name} </h2>
                    <h3> {props.blogCount}  {props.blogCount === 1 ? 'blog' : 'blogs'} </h3>
                </div>
                </Link>
            </Card>
        </li>
    );
}

export default UserItem;