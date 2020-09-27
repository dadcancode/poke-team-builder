import React from 'react';
import { API_URL, ENDPOINTS, log } from '../services/Config';

// return an array of pokemon based on index

const getPokedex = async (startIndex, endIndex) => {
    let limit = endIndex - (startIndex - 1);
    let offset = startIndex - 1;
    return fetch(`${API_URL}${ENDPOINTS.pokemon}?limit=${limit}&offest=${offset}`)
        .then(resp => resp.json())
        .then(json => {
            return json.results
        })
}

const getPokeByID = async (id) => {
    return fetch(`${API_URL + ENDPOINTS.pokemon}/${id}`)
        .then(resp => resp.json())
        .then(json => {
            return json
        })
}

const getTypeInfoByURL = async (url) => {
    return fetch(url)
        .then(resp => resp.json())
        .then(json => { 
            return json.damage_relations; 
        })
}

const getTypeInfoByPokeID = async (id) => {
    let p = await getPokeByID(id);
    let typeObj = {};
    let temp = await Promise.all(
        p.types.map( async (val) => {
                let data = await getTypeInfoByURL(val.type.url);
                log('data', data);
                // console.log(`${ind} data for type info is: ${JSON.stringify(data)}`)
                typeObj = { ...data };
                log('typeObj inside map', typeObj);
            })
    )

    log('DA TEMP', temp);

    log('typeObj outside of map, before return', typeObj);
    return typeObj;

}

export { getPokeByID, getPokedex, getTypeInfoByPokeID };