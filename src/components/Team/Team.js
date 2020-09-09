import React, { useContext } from 'react';
import PokemonTab from '../PokemonTab/PokemonTab';
import { TeamContext } from '../TeamContext';

const Team = () => {

    const [team, setTeam] = useContext(TeamContext);
    return (
        <div className='row'>
            <div className='col-12'>
                <button class="btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Team
                </button>
            </div>
            <div class="collapse col-12" id="collapseExample">
                <div class="row">
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