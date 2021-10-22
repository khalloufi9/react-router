import React from 'react'
import './Usercard.css'
import { Link } from 'react-router-dom';
import react from 'react';


 const Users = ({user}) => {
         
    return (
        <Link to={{
                pathname:"/user",
                state : user
            }}>
            <div className="sous-card">
            <img src={user.src} alt="image not found"></img>
            <h1 className="text"> {user.name}</h1>
            
            </div> 
            </Link>
           
        
    )
}
export default Users;

