import React from "react"

import "./UserList.css"
import UserItem from "./UserItem"

function UserList(props){

    if(props.items.length===0){
        return(
            <div className="centre">
                <h2>No User found</h2>
            </div>
        )
    }
    return(
        <ul className="users-list">
            {
                props.items.map(user => (
                    <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    blogCount={user.blogs} />
                ))
            }
        </ul>
    );
}

export default UserList;