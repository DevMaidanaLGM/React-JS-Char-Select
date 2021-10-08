import React from 'react';
import data from "../../data/data.json";
import Character from "../character/Character";

export default class Home extends React.Component{
  constructor(){
    super()
  }









  render(){

    return (

      //Muestra los datos alojados en el archivo data.json
      <div className="charContainer">
        <h1 className="mainTitle">Boku Dake Ga Inai Machi</h1>
        <h2 className="titleT">Character's Info</h2>
       {data.Characters.map((character) => (
         <Character
           name={character.name}
           lastname={character.lastname}
           url={character.photo}
           id={character.id}
         />
       //Llama al tag Character mandandole la info recolectada del archivo .json
       ))}
     </div>
    )
    }
  }
