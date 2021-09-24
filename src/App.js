import logo from './logo.svg';
import './App.css';
import NavBar from './components/views/navBar';
import Home from './components/views/home';
import About from './components/views/about';
import CharacterDetail from './components/character/CharacterDetail';

function App() {
  return (

    /* Se llama los tags importados desfe la carpeta de componentes y
    se los pone dentro de un tag de estilos para aplicarle un solo archivo
    de estilo a todos*/

    <div>
    <styles>
      <NavBar/>
      <Home/>
      <CharacterDetail/>
      <About/>
      </styles>
    </div>
  );
}

export default App;
