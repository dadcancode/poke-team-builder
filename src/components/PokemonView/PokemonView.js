import React, { useState, useEffect } from 'react';
import { useQueryParams } from 'hookrouter';

const PokemonView = (props) => {

    const [ viewedPokemon, setViewedPokemon ] = useState({});


    useEffect(() => {
        getViewedPokemon(props.id);
    }, [props]);

    const getViewedPokemon = (id) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(resp => resp.json())
        .then(json => {
            setViewedPokemon(json);
        })
    }


    return (
        <div className='row'>
            <div className='col-12'>
                <div className='row no-gutters'>
                    <div className='col-10'>
                        <h5>{viewedPokemon.name}</h5>
                    </div>
                    <div className='col-2'>
                        <span>{viewedPokemon.id}</span>
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <img className='img-fluid' src={viewedPokemon.sprites ? viewedPokemon.sprites.other['official-artwork'].front_default : ''}/>
            </div>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-12'>
                        Types:
                    </div>
                    {viewedPokemon.types ? viewedPokemon.types.map((val, ind) => {
                        if(ind === 0) {
                            return (
                                <div className='col'>{`${val.type.name}`}</div>
                            )
                        } else {
                            return (
                                <div className='col'>{`/ ${val.type.name}`}</div>
                            )
                        }
                    }) : ''}
                </div>
            </div>
            <div className='col-12'>
                <table className='table'>
                    <thead>
                        <th scope='col'>Stat</th>
                        <th sope='col'>Base Score</th>
                    </thead>
                    <tbody>
                        {viewedPokemon.stats ? viewedPokemon.stats.map((val) => {
                            return (
                                <tr>
                                    <th scope='row'>{val.stat.name}</th>
                                    <td>{val.base_stat}</td>
                                </tr>
                            )
                        }) : ''}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default PokemonView;