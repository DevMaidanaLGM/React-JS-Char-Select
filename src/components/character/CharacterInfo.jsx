import React from "react";
import { useParams } from "react-router";
import data from  "../../data/data.json";

export default function CharacterInfo(){
    const param = useParams();

    const charSelect = data.Characters.find((char)=>char.id == param.id);


    return(
        <div>


          <div id="selecSection">

            <div id="detailSection">
              <h3 id = "detailTitle">
                {charSelect.name +
                  " " +
                  charSelect.lastname}
              </h3>
              <div>
                <img id="wallpaperImg" src={charSelect.wallpaper}></img>
              </div>

              <p> Age: {charSelect.age}</p>
              <p> Quote: "{charSelect.bestPhrase}"</p>
              <p> Friends: {charSelect.friends }</p>
              <p> City: {charSelect.city}</p>
            </div>
          </div>
        </div>
        );

}
