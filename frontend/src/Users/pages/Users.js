import React from 'react'
import UserList from "../components/UserList"

function Users() {

  // This is a dummy data, later these data will be fetched from Mongodb database.

    const USERS = [
        {
            id:"u1",
            name:"Alok",
            image:"https://picsum.photos/200",
            blogs:3
        },
        {
            id:"u2",
            name:"Tuzun",
            image:"https://picsum.photos/200",
            blogs:4
        },
        {
          id:"u3",
          name:"Nitin",
          image:"https://picsum.photos/200",
          blogs:10
        },
        {
          id:"u4",
          name:"Yasir Arafat",
          image:"https://picsum.photos/200",
          blogs:8
        },
        {
          id:"u5",
          name:"vinod sharma",
          image:"https://picsum.photos/200",
          blogs:1
        },
        {
          id:"u6",
          name:"Muhammad Zohaib Arshad",
          image:"https://picsum.photos/200",
          blogs:2
        },
        {
          id:"u7",
          name:"G.Vageesha Datta",
          image:"https://picsum.photos/200",
          blogs:7
        } 
    ]

  return (
    <UserList items= {USERS}/>
  )
}

export default Users;
