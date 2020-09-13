import React, {useState, useEffect} from 'react';
import { A, navigate } from 'hookrouter';
import './PokemonTab.css';

const PokemonTab = (props) => {
    
    const [ tabInfo, setTabInfo ] = useState({});

    

    const getTabInfo = (url) => {
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            setTabInfo(json)
        })
    }

    const viewPokemon = () => {
        navigate(`/pokemonView/${tabInfo.id}`);
    }

    useEffect(() => {
        getTabInfo(props.url);
    }, [props]);

    return (
        <div className='col-md-4 col-lg-3 d-flex justify-content-center'>
            <div className='card w-100 bg-light text-secondary pokedex-card text-decoration-none' onClick={() => {
                viewPokemon();
            }}>
                <div className='card-body'>
                    <div className='row no-gutters'>
                        <div className='col-11 col-md-10'>
                            <div className='row no-gutters'>
                                <div className='col-4 col-md-12 d-flex justify-content-center'>
                                    <img src={tabInfo.sprites ? tabInfo.sprites.front_default : ''}/>
                                </div>
                                <div className='col-8 col-md-12 d-flex justify-content-center'>
                                    <h6 className='card-title pokedex-name'>{tabInfo.name}</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-1 col-md-2 d-flex justify-content-end'>
                            <span className='pokedex-id'>{tabInfo.id}</span>
                        </div>
                    </div>
                    <div className='row no-gutters'>
                        {tabInfo.types ? tabInfo.types.map((val, ind) => {
                            if(ind === 0) {
                                return (
                                    <p className='lead h-100 mr-1'>{`${val.type.name}`}</p>
                                )
                            } else {
                                return (
                                    <p className='lead h-100'>{`/ ${val.type.name}`}</p>
                                )
                            }
                        }) : ''}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PokemonTab;