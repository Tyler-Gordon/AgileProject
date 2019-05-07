function reduceDamage(damage, damageReducer){

    let reducedDamage = (100/(100 + damageReducer)) * damage

    return reducedDamage
}

function getAbilityDamage(ability, ad, ap, abilityLevel){

    let baseDamage = ability.base[abilityLevel-1]
    let apMod = ability.modifier.ap[abilityLevel-1] * ap
    let adMod = ability.modifier.ad[abilityLevel-1] * ad
    let abilityDamage = baseDamage + apMod + adMod

    return abilityDamage
}

function getResistanceSubtracted(percentPen, flatPen, resistance){
    
    return 0
}

function getDamageReducer(resistance, resistanceSubtracted){
    return resistance - resistanceSubtracted
}

exports.getDamage = (source, data) => {


    let playerad = data.attackdamage
    let playerap = data.spelldamage

    let playerQlevel = data.qlevel
    let playerWlevel = data.wlevel
    let playerElevel = data.elevel
    let playerRlevel = data.rlevel

    let enemyarmor = data.armor
    let enemyspellblock = data.spellblock


    // let playerQbase = source.q[0].base[playerQlevel]
    // let playerQad = source.q[0].modifier.ad[playerQlevel]
    // let playerQap = source.q[0].modifier.ap[playerQlevel]
    // let playerQtype = source.q[0].type

    // let playerWbase = source.w[0].base[playerWlevel]
    // let playerWad = source.w[0].modifier.ad[playerWlevel]
    // let playerWap = source.w[0].modifier.ap[playerWlevel]
    // let playerWtype = source.w[0].type

    // let playerEbase = source.e[0].base[playerElevel]
    // let playerEad = source.e[0].modifier.ad[playerElevel]
    // let playerEap = source.e[0].modifier.ap[playerElevel]
    // let playerEtype = source.e[0].type

    // let playerRbase = source.r[0].base[playerRlevel]
    // let playerRad = source.r[0].modifier.ad[playerRlevel]
    // let playerRap = source.r[0].modifier.ap[playerRlevel]
    // let playerRtype = source.r[0].type

}

