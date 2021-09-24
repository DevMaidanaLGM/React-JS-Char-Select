import React from 'react';

export default class Character extends React.Component{
  constructor(props){
    super(props)
    //Recibe la información del .json que tiene los datos de los characters desde el home
  }


render(){

  return ( //Devuelve la imagen junto con el nombre y el apellido
    <div id="charList">
      <ul>
        <img id="portrait" src={this.props.url}></img>
        <h3>{this.props.name} {this.props.lastname}</h3>
      </ul>

    </div>
  )
  }
}
