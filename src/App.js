import logo from './logo.svg';
import './App.css';
import NavBar from './components/views/navBar';
import Home from './components/views/home';
import About from './components/views/about';
import CharacterDetail from './components/character/CharacterDetail';
import CharacterInfo from './components/character/CharacterInfo';
import {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

useEffect( () => {
  console.log("Montando App...")
})

  return (

    /* Se llama los tags importados desfe la carpeta de componentes y
    se los pone dentro de un tag de estilos para aplicarle un solo archivo
    de estilo a todos*/

    /* Edit: 01/10:
    Cambios:
    * Se instala el router-dom a traves del
    comando "$npm install --save react-router-dom"  y se lo importa en
    este componente junto con todo lo necesario

    * Se abre un tag de Router para manejar todas las rutas
    * Dentro del tag de Router se abre un switch donde pondremos el manejo
    de las rutas



    */

      <>
      <div className="bg">
          <Router>
            <NavBar/>
<div className="container">
            <Switch>

              <Route exact path="/charDetail/:id">
                <CharacterInfo />
              </Route>
              <Route exact path="/charDetail">
                <CharacterDetail />
              </Route>


              <Route path="/about">
                     <About/>
              </Route>

              <Route path="/">
                   <Home />
              </Route>
            </Switch>
  </div>
          </Router>
          </div>
        </>
  );
}

export default App;
