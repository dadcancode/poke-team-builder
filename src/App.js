import React, { useContext, createContext, useReducer } from 'react';
import { useRoutes } from 'hookrouter';
import routes from './components/routes';
// import Menu from './components/Menu/Menu';
// import Pokedex from './components/Pokedex/Pokedex';
// import PokemonView from './components/PokemonView/PokemonView'
import './App.css';
import { TeamContext, TeamProvider } from './components/TeamContext'

function App() {

  const routeResult = useRoutes(routes);

  return (
    <TeamProvider>
      <div className="App container-fluid">
        <div className='row'>
          <h1 className='col-6 display-4'>Poke TeamBuilder</h1>
        </div>
        {routeResult}
      </div>
    </TeamProvider>
  );
}

export default App;
