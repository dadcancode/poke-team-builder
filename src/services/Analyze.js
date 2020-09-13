const getDmgData = (dmgObj, damageType) => {
    if(dmgObj[damageType].length) {
        let dmgArr = [];
        dmgObj[damageType].map((val) => {
            dmgArr.push(val.name);
        });
        return dmgArr;    
    } else {
        return null;
    }
}

const getWeakness = (typeData) => {
    
}