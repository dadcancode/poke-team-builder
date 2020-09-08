import React, { createContext, useState } from 'react';

const TeamContext = createContext([[], () => []]);

const TeamProvider = (props) => {

    const [team, setTeam] = useState([]);

    return (
        <TeamContext.Provider value={[team, setTeam]}>
            {props.children}
        </TeamContext.Provider>
    )
}

export { TeamContext, TeamProvider };