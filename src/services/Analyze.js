import { log } from "./Config";



const objectifyArray = (arr) => {
    log('objectify ran', null);
    log('arr', arr)
    let objectified = {};
    if(arr.length > 0) {
        arr.map((val) => {
            objectified[val.name] = val.name;
        });
    }
    log('objectified', objectified)
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

const getStrengths = (damageRelations) => {
    // console.log('getStrengths ran');
    // // log('typeof(typeDataArr)', typeof(typeDataArr));
    // let strongTypes = {
    //     noDmgFrom: ,
    //     doubleDmgTo: {...getDmgData(damageRelations, 'double_damage_to')},
    //     halfDmgFrom: {...getDmgData(damageRelations, 'half_damage_from')}
    // }

    // return strongTypes;


}

const getTeamStats = async (teamArr) => {
    console.log('getTeamStats ran');
    log('teamArr', teamArr);

    let teamStats = {
        strongTypes: {
            noDmgFrom: {},
            doubleDmgTo: {},
            halfDmgFrom: {}
        },
        weakTypes: {}
    };

    let temp = await Promise.all(
        teamArr.map((val) => {
            log('getTeamStats map val', val);
            teamStats.strongTypes.noDmgFrom = {
                ...getDmgData(val, 'no_damage_from'),
                ...teamStats.strongTypes.noDmgFrom
            }
            teamStats.strongTypes.doubleDmgTo = {
                ...getDmgData(val, 'double_damage_to'),
                ...teamStats.strongTypes.doubleDmgTo
            }
            teamStats.strongTypes.halfDmgFrom = {
                ...getDmgData(val, 'half_damage_from'),
                ...teamStats.strongTypes.halfDmgFrom
            }
            teamStats.weakTypes.noDmgTo = {
                ...getDmgData(val, 'no_damage_to'),
                ...teamStats.weakTypes.noDmgTo
            }
            teamStats.weakTypes.doubleDmgFrom = {
                ...getDmgData(val, 'double_damage_from'),
                ...teamStats.weakTypes.doubleDmgFrom
            }
            teamStats.weakTypes.halfDmgTo = {
                ...getDmgData(val, 'half_damage_to'),
                ...teamStats.weakTypes.halfDmgTo
            }
            log('teamStats', teamStats);
        })

    )

    
    log('teamStats before return', teamStats);
    log('teamStats.strongTypes.doubleDmgTo', teamStats.strongTypes.doubleDmgTo);
    log('object.entries(teamStats)', Object.entries(teamStats))
    return teamStats;
}

const analyzeTeamStats = (teamStats) => {
    let teamWeakness = [];
    let weakArr = [...Object.keys(teamStats.weakTypes.noDmgTo), ...Object.keys(teamStats.weakTypes.doubleDmgFrom)];
    for(let i = 0; i < weakArr.length; i++) {
        if(!teamStats.strongTypes.noDmgFrom[weakArr[i]] || !teamStats.strongTypes.doubleDmgTo[weakArr[i]]) {
            teamWeakness.push(weakArr[i]);
        }
    }
    
    return teamWeakness;
}

export { getStrengths, getWeaknesses, getTeamStats, analyzeTeamStats };