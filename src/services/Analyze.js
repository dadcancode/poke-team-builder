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

const getStrengths = (typeDataArr) => {
    console.log('getStrengths ran');
    log('typeDataArr', typeDataArr);
    log('typeDataArr[0]', typeDataArr[0])
    // log('typeof(typeDataArr)', typeof(typeDataArr));
    let temp = [...typeDataArr];
    log('temp', temp);
    let strongTypes = {
        noDmgFrom: {},
        doubleDmgTo: {},
        halfDmgFrom: {}
    }
    typeDataArr.map((val) => {
        console.log('getStrengths is mapping')
        console.log(val)
        strongTypes.noDmgFrom = {...getDmgData(val.damage, 'no_damage_from')};
        strongTypes.doubleDmgTo = {...getDmgData(val.damage, 'double_damage_to')};
        strongTypes.halfDmgFrom = {...getDmgData(val.damage, 'half_damage_from')};        
    });

    return strongTypes;


}

const getTeamStats = (teamArr) => {
    console.log('getTeamStats ran');
    log('teamArr', teamArr);
    log('teamArr.lenght', teamArr.length);
    let teamStats = {
        strongTypes: {},
        weakTypes: {}
    };
    let temp = [...teamArr];
    log('getTeamStats temp', temp)
    if(temp.length > 0) {
        log('temp[0].tyepData', temp[0].typeData)
        let myTemp = getStrengths(temp[0].typeData);
        log('myTemp', myTemp)
        temp.map((val) => {
            log('getTeamStats map val', val);
            log('val.typeData', val.typeData);
            // log('Object.entries(val.typeData)', Object.entries(val.typeData));
            // log('getTeamStats map typeof(val.typeData)', typeof(val.typeData));
            log('val.typeData.length', val.typeData.length);
            let strongTemp = getStrengths(val.typeData);
            log('strongTemp', strongTemp);
        });
    }

    return teamStats;
}

export { getStrengths, getWeaknesses, getTeamStats };