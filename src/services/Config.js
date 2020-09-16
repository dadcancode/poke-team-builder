const API_URL = 'https://pokeapi.co/api/v2/';

const ENDPOINTS = {
    pokemon: 'pokemon',
    type: 'type'
}

export { API_URL, ENDPOINTS};

export const log = (name, dataToLog) => {
    console.log(`${name} is:`);
    console.log(dataToLog);
    console.log('===========================');
}