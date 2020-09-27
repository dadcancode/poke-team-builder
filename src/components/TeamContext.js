import React, { createContext, useState } from 'react';

const TeamContext = createContext([[], () => []]);

const TeamProvider = (props) => {

    const [team, setTeam] = useState(['1', '8']);

    return (
        <TeamContext.Provider value={[team, setTeam]}>
            {props.children}
        </TeamContext.Provider>
    )
}

export { TeamContext, TeamProvider };