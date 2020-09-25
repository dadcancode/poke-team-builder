import { log } from "./Config";



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
    log('dmgObj', dmgObj);
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

const getStrengths = async (typeDataArr) => {
    console.log('getStrengths ran');
    log('typeDataArr', typeDataArr);
    log('typeDataArr[0]', typeDataArr[0]);
    log('typeDataArr.length', typeDataArr.length);
    // log('typeof(typeDataArr)', typeof(typeDataArr));
    let strongTypes = {
        noDmgFrom: {},
        doubleDmgTo: {},
        halfDmgFrom: {}
    }
    await typeDataArr.map((val) => {
        console.log('getStrengths is mapping')
        console.log(val)
        strongTypes.noDmgFrom = {...getDmgData(val.damage, 'no_damage_from')};
        strongTypes.doubleDmgTo = {...getDmgData(val.damage, 'double_damage_to')};
        strongTypes.halfDmgFrom = {...getDmgData(val.damage, 'half_damage_from')};        
    });

    return strongTypes;


}

const getTeamStats = async (teamArr) => {
    console.log('getTeamStats ran');
    log('teamArr', teamArr);
    let teamStats = {
        strongTypes: {},
        weakTypes: {}
    };

    if(teamArr.length > 0) {

        await teamArr.map(async (val) => {
            let dataArr = await val.typeData;
            log('getTeamStats map val', val);
            log('val.typeData', val.typeData);
            // log('Object.entries(val.typeData)', Object.entries(val.typeData));
            // log('getTeamStats map typeof(val.typeData)', typeof(val.typeData));
            log('val.typeData.length', val.typeData.length);
            log('dataArr', dataArr);
            let strongTemp = getStrengths(dataArr);
            log('strongTemp', strongTemp);
        });
    }

    return teamStats;
}

export { getStrengths, getWeaknesses, getTeamStats };