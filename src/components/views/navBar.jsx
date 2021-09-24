import React from 'react';

export default class NavBar extends React.Component{
  constructor(){
    super()
  }


render(){
//Navegación que no lleva a ningun lado, solo muestra texto
  return (
    <div>
      <nav>
        <a href="#">Boku Dake Ga Inai Machi Characters</a>
        <a href="#">Character Detail</a>
        <a href="#">About</a>
      </nav>

    </div>
  )
  }
}
