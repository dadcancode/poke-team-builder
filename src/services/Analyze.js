const objectifyArray = (arr) => {
    let objectified = {};
    if(arr.length > 0) {
        arr.map((val, ind) => {
            objectified[val] = ind;
        });
    }
    return objectified;
}

const getDmgData = (dmgObj, damageType) => {
    console.log('getDmgData ran');
    console.log(`dmgData dmgObj: ${JSON.stringify(dmgObj)}, damageType: ${damageType}`);
    let dmg = {};
    if(dmgObj[damageType].length > 0) {
        dmg = {...objectifyArray(dmgObj[damageType])};    
    }
    return dmg;
}

const getWeaknesses = (typeDataArr) => {
    let weakTypes = {
        noDmgTo: {},
        doubleDmgFrom: {},
        halfDmgTo: {}
    }
    typeDataArr.map((val) => {
        weakTypes.noDmgTo = {...getDmgData(val.damage, 'no_damage_to')};
        weakTypes.doubleDmgFrom = {...getDmgData(val.damage, 'double_damage_from')};
        weakTypes.halfDmgTo = {...getDmgData(val.damage, 'half_damage_to')};        
    });

    return weakTypes;
}

const getStrengths = (typeDataArr) => {
    console.log('getStrengths ran');
    console.log(`getStrengths typeDataArr: ${JSON.stringify(typeDataArr)}`);
    let strongTypes = {
        noDmgFrom: {},
        doubleDmgTo: {},
        halfDmgFrom: {}
    }
    typeDataArr.map((val) => {
        strongTypes.noDmgFrom = {...getDmgData(val.damage, 'no_damage_from')};
        strongTypes.doubleDmgTo = {...getDmgData(val.damage, 'double_damage_to')};
        strongTypes.halfDmgFrom = {...getDmgData(val.damage, 'half_damage_from')};        
    });

    return strongTypes;
}

const getTeamStats = (teamArr) => {
    console.log('getTeamStats ran');
    console.log(`teamArr: ${JSON.stringify(teamArr)}`)
    let teamStats = {
        strongTypes: {},
        weakTypes: {}
    };
    if(teamArr.length > 0) {
        console.log('teamArr.length is > 0')
        teamArr.map((val) => {
            console.log(`val.typeData: ${JSON.stringify(val.typeData)}`);
            let strongTemp = getStrengths(val.typeData);
            console.log(strongTemp);
        });
    }

    return teamStats;
}

export { getStrengths, getWeaknesses, getTeamStats };