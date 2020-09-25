import React, { useContext, useEffect, useState } from 'react';
import PokemonTab from '../PokemonTab/PokemonTab';
import { TeamContext } from '../TeamContext';
// import {getPokedex} from 'C:/Users/Zach/Desktop/Dev Projex/poke-team-builder/src/services/Poke.js';
import {getTypeInfoByPokeID} from '../../services/Poke';
import {getTeamStats} from '../../services/Analyze';
import { log } from '../../services/Config';

const Team = () => {

    const [team, setTeam] = useContext(TeamContext);

    const [typeInfo, setTypeInfo] = useState([]);
    const [teamStats, setTeamStats] = useState({})

    useEffect( () => {
        if(team.length > 0) {
            team.map(async (val) => {
                let newTypeInfo = await getTypeInfoByPokeID(val);
                // console.log(`newTypeInfo: ${JSON.stringify(newTypeInfo)}`);
                setTypeInfo(typeInfo => [...typeInfo, newTypeInfo]);
                // console.log(`temp inside map after push: ${JSON.stringify(temp)}`);
            });
            
            // console.log(`temp after map: ${JSON.stringify(temp)}`);
        }
        // console.log('team change')
    }, []);

    useEffect(() => {
        if(typeInfo.length > 0) {
            
        }
    }, [typeInfo]);

    return (
        <div className='row'>
            <div className='col-12'>
                <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Team
                </button>
            </div>
            <div className="collapse col-12" id="collapseExample">
                <div className="row">
                    {team.map((val) => {
                        return (
                            <PokemonTab url={`https://pokeapi.co/api/v2/pokemon/${val}`} />
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default Team;