import React from "react"

import "./UserList.css"
import UserItem from "./UserItem"
import Card from "../../shared/components/UIElements/Card";

function UserList(props){

    if(props.items.length===0){
        return(
            <Card>
                <div className="centre">
                    <h2>No User found</h2>
                </div>
            </Card>
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