import React from 'react';
import Menu from './Menu/Menu';
import Pokedex from './Pokedex/Pokedex';
import PokemonView from './PokemonView/PokemonView';

const routes = {
    '/':() => <Menu />,
    '/pokedex':() => <Pokedex />,
    '/pokemonView/:id':({id}) => <PokemonView id={id} />
}

export default routes;