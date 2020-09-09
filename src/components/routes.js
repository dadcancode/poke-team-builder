import React from 'react';
import Menu from './Menu/Menu';
import Pokedex from './Pokedex/Pokedex';
import PokemonView from './PokemonView/PokemonView';
import Team from './Team/Team';

const routes = {
    '/':() => <Menu />,
    '/pokedex':() => <Pokedex />,
    '/pokemonView/:id':({id}) => <PokemonView id={id} />,
    '/team': () => <Team />
}

export default routes;