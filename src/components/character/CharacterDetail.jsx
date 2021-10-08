import React , {useState} from "react";
import { useParams } from "react-router";

import data from "../../data/data.json";




export default function CharacterDetail(props){


  const[charSelect,setState]=useState(data.Characters[0]);
  //Se declara el character actual y el setState


    const onChangeInput = (event) => {
   setState(data.Characters.find( //Se busca el char que coincida con el ID
     //Del character seleccionado y luego se lo setea
    (char) => char.id === event.target.value))
//Método que se dispara cuando hay un cambio en el select

    };

    return (

      <div id="selecSection">
        <select id="selectBox"
          onChange={(event) => {
            onChangeInput(event); //Se llama al evento que maneja el cambio
          }}
        >

        //Se recorre el arreglo y se asigna una opción por cada elemento
          {data.Characters.map((character) => (
            <option value={character.id}>
              {character.name + " " + character.lastname}
            </option>
              )
            )
          }
        </select>

        <div id="detailSection">
          <h3 id = "detailTitle">
            {charSelect.name +
              " " +
              charSelect.lastname}

          </h3>
          <div>
            <img id="wallpaperImg" src={charSelect.wallpaper}></img>
          </div>

          <div className="textDetail">

          <p> Age: {charSelect.age}</p>
          <p> Quote: "{charSelect.bestPhrase}"</p>
          <p> Friends: {charSelect.friends }</p>
          <p> City: {charSelect.city}</p>
          </div>
        </div>
      </div>
    );

}
