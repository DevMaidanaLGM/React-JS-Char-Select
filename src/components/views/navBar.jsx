import React from 'react';
import { NavLink } from "react-router-dom";
export default class NavBar extends React.Component{
  constructor(){
    super()
  }


render(){
//Navegación que no lleva a ningun lado, solo muestra texto
  return (
    <div>
      <nav>
        <NavLink id="navLink" to={`/`}>
          <a href="#">Boku Dake Ga Inai Machi Characters</a>
        </NavLink>
        <NavLink id="navLink" to={`/charDetail/`}>
          <a href="#">Character Detail</a>
        </NavLink>
        <NavLink id="navLink" to={`/About`}>
          <a href="#">About</a>
        </NavLink>
      </nav>

    </div>
  )
  }
}
