import React from 'react'
import Usercard from './Usercard'
import './Userlist.css'

 const Userlist = ({Users}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
        }}
        >
           {Users.map(el=><Usercard user={el}/>)} 
        </div>
    )
}

export default Userlist;
