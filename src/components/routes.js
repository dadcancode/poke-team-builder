import React from 'react';
import Menu from './Menu/Menu';
import Pokedex from './Pokedex/Pokedex';

const routes = {
    '/':() => <Menu />,
    '/pokedex':() => <Pokedex />
}

export default routes;