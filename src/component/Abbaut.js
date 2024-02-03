import React from 'react'
import { NavLink} from 'react-router-dom'
const Abbaut = () => {
  return (
    <> 
        <ul>
       <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/Chekh">Chekh</NavLink>
        </li> 
        <li>
        <NavLink to="/Docs">Docs</NavLink>
        </li>     
        <li>
        <NavLink to="/Wepp">Wepp</NavLink>
        </li> 
        </ul>
    </>
  )
}

export default Abbaut
