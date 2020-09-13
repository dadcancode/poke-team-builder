import React from 'react';
import { API_URL, ENDPOINTS } from '../services/Config';

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

const getTypeInfoByPokeID = async (id) => {
    let p = await getPokeByID(id);
    let typeObj = {
        name: p.name,
        typeData: []
    };
    p.types.map( async (val, ind) => {
        let data = await fetch(val.type.url).then(resp => resp.json()).then(json => {return json});
        // console.log(`${ind} data for type info is: ${JSON.stringify(data)}`)
        typeObj.typeData.push(data);
    })
    console.log(`typeObj before return: ${JSON.stringify(typeObj)}`)
    return typeObj;

}

export { getPokeByID, getPokedex, getTypeInfoByPokeID };