import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './components/routes';
import './App.css';

function App() {

  const routeResult = useRoutes(routes);

  return (
    <div className="App container-fluid">
      <div className='row'>
        <h1 className='col-6 display-4'>Poke TeamBuilder</h1>
      </div>
      {routeResult}
    </div>
  );
}

export default App;
