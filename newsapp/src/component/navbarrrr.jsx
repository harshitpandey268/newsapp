import React from 'react'
import "./navbarrrr.css";
import SwipeableTemporaryDrawer from './sidebar';
const navbarrrr = ({setCategory}) => {
  return (
    <div className='nav'>
        <div className='icon'><SwipeableTemporaryDrawer setCategory={setCategory}/>
            
        </div>
        <img style={{cursor:"pointer"}} src="./logo.png" height={"99%"} alt="logo"
        />
    </div>
  )
}

export default navbarrrr