import React from 'react';
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

export default function  Character(props){

    //Recibe la información del .json que tiene los datos de los characters desde el home





  return ( //Devuelve la imagen junto con el nombre y el apellido
    <div id="charList" >
      <ul>
        <NavLink to={`/charDetail/${props.id}`}>
          <img id="portrait" src={props.url}></img>
        </NavLink>

        <NavLink to={`/charDetail/${props.id}`}>
          <h3>{props.name} {props.lastname}</h3>
        </NavLink>
      </ul>

    </div>
  )

}
