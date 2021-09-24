import React from "react";


import data from "../../data/data.json";



//Constructor de la clase
export default class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      charSelect: data.Characters[0],
      //Por defecto se asigna el estado = al objeto 0 del array del data.json
    };
  }


  onChangeInput = (event) => { //Evento que maneja el cambio del select
    this.setState(() => {
      return {
        charSelect: data.Characters.find(
          //Método que busca el objeto con el atributo nombre dentro del array
          (character) => character.name == event.target.value
        ),
      };
    });
  };

addSpaces = (item) =>{ //Metodo que agrega espacios entre el arreglo de amigos
  let itemFix = item + " "
    return itemFix;

  }

showFriends = () =>{ //Metodo que modifica el arreglo amigos original por uno arregaldo
  this.state.charSelect.friends = this.state.charSelect.friends.map(this.addSpaces);
};



  render() {

    return (

      <div id="selecSection">
        <select id="selectBox"
          onChange={(event) => {
            this.onChangeInput(event); //Se llama al evento que maneja el cambio
          }}
        >

        //Se recorre el arreglo y se asigna una opción por cada elemento
          {data.Characters.map((character) => (
            <option value={character.name}>
              {character.name + " " + character.lastname}
            </option>
              )
            )
          }
        </select>

        <div id="detailSection">
          <h3 id = "detailTitle">
            {this.state.charSelect.name +
              " " +
              this.state.charSelect.lastname}

          </h3>
          <div>
            <img id="wallpaperImg" src={this.state.charSelect.wallpaper}></img>
          </div>

          <p> Age: {this.state.charSelect.age}</p>
          <p> Quote: "{this.state.charSelect.bestPhrase}"</p>
          <p> Friends: {this.showFriends()} {this.state.charSelect.friends }</p>
          <p> City: {this.state.charSelect.city}</p>
        </div>
      </div>
    );
  }
}
