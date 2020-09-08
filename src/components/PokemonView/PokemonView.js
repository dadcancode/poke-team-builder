import React, { useState, useEffect, useContext } from 'react';
import { useQueryParams } from 'hookrouter';
import { TeamContext } from '../TeamContext';

const PokemonView = (props) => {

    const [ viewedPokemon, setViewedPokemon ] = useState({});

    const [team, setTeam] = useContext(TeamContext);


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

    const addToTeam = () => {
        if(team.length < 7) {
            setTeam([...team, props.id])
        }
    }


    return (
        <div className='row no-gutters'>
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
                <button onClick={() => {
                    addToTeam()
                }} className='btn btn-outline-primary w-100'>Add To Team</button>
            </div>
            <div className='col-12'>
                <div className='row no-gutters'>
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