import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';




 const Navbar = () => {
     const newstyle={color:'white'}
    return (
        <div className="Navbar">
            <h2>Navbar</h2>
            <ul >
               
               <Link  to='/Users' style={newstyle}>Users</Link>
              <Link  to='/About' style={newstyle}>About</Link>

            </ul>

        </div>
    )
}
export default Navbar