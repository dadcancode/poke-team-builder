import React from 'react';
import { useRoutes, navigate } from 'hookrouter';
import routes from './components/routes';
// import Menu from './components/Menu/Menu';
// import Pokedex from './components/Pokedex/Pokedex';
// import PokemonView from './components/PokemonView/PokemonView'
import './App.css';
import { TeamProvider } from './components/TeamContext'

function App() {

  const routeResult = useRoutes(routes);

  return (
    <TeamProvider>
      <div className="App container-fluid">
        <div className='row'>
          <h1 onClick={() => navigate('/')} className='col-6 display-4'>Poke TeamBuilder</h1>
        </div>
        {routeResult}
      </div>
    </TeamProvider>
  );
}

export default App;
