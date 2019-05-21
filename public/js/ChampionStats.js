// May need to take a second look at this class
class ChampionStats extends React.Component {
    render() {
        let currentStats;
        let levelMod = this.props.level - 1;
        let itemMod = {
            hp : 0,
            mp : 0,
            armor : 0,
            spellblock : 0,
            attackdamage : 0,
            attackspeed : 0,
            spelldamage : 0
        }
        let itemStrings = this.props.items;
        for (let statMod of itemStrings) {
            for (let currentStatMod of Object.keys(statMod)) {
                switch (currentStatMod) {
                    case 'FlatHPPoolMod':
                        itemMod.hp += statMod.FlatHPPoolMod;
                        break;
                    case 'FlatMPPoolMod':
                        itemMod.mp += statMod.FlatMPPoolMod;
                        break;
                    case 'FlatArmorMod':
                        itemMod.armor += statMod.FlatArmorMod;
                        break;
                    case 'FlatSpellBlockMod':
                        itemMod.spellblock += statMod.FlatSpellBlockMod;
                        break;
                    case 'FlatPhysicalDamageMod':
                        itemMod.attackdamage += statMod.FlatPhysicalDamageMod;
                        break;
                    case 'PercentAttackSpeedMod':
                        itemMod.attackspeed += statMod.PercentAttackSpeedMod;
                        break;
                    case 'FlatMagicDamageMod':
                        itemMod.spelldamage += statMod.FlatMagicDamageMod;
                        break;
                }
            }
        }
        currentStats = {
            hp : this.props.championData.hp + (this.props.championData.hpperlevel * levelMod) + itemMod.hp,
            mp : this.props.championData.mp + (this.props.championData.mpperlevel * levelMod) + itemMod.mp,
            armor : this.props.championData.armor + (this.props.championData.armorperlevel * levelMod) + itemMod.armor,
            spellblock : this.props.championData.spellblock + (this.props.championData.spellblockperlevel * levelMod) + itemMod.spellblock,
            attackdamage : this.props.championData.attackdamage + (this.props.championData.attackdamageperlevel * levelMod) + itemMod.attackdamage,
            attackspeed : (this.props.championData.attackspeedperlevel * levelMod) + itemMod.attackspeed,
            spelldamage : itemMod.spelldamage
        }
        if (this.props.enemy) {
            window.enemyStats = currentStats;
        } else {
            window.stats = currentStats;
        }
        return (
            <div id='ChampionStats' className='column has-text-white is-paddingless'>
                <h5>Health: {currentStats.hp.toFixed(2)}</h5> 
                <h5>Mana: {currentStats.mp.toFixed(2)}</h5>
                <h5>Armour: {currentStats.armor.toFixed(2)}</h5>
                <h5>Magic Resist: {currentStats.spellblock.toFixed(2)}</h5>
                <h5>Attack Damage: {currentStats.attackdamage.toFixed(2)}</h5>
                <h5>Attack Speed: {`${this.props.championData.attackspeed.toFixed(2)} + ${currentStats.attackspeed.toFixed(2)}%`}</h5>
                <h5>Ability Power: {currentStats.spelldamage.toFixed(2)}</h5>
            </div>
        )
    }

}