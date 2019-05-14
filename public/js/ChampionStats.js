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
            switch(Object.keys(statMod)[0]){
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
        currentStats = {
            hp : this.props.championData.hp + (this.props.championData.hpperlevel * levelMod) + itemMod.hp,
            mp : this.props.championData.mp + (this.props.championData.mpperlevel * levelMod) + itemMod.mp,
            armor : this.props.championData.armor + (this.props.championData.armorperlevel * levelMod) + itemMod.armor,
            spellblock : this.props.championData.spellblock + (this.props.championData.spellblockperlevel * levelMod) + itemMod.spellblock,
            attackdamage : this.props.championData.attackdamage + (this.props.championData.attackdamageperlevel * levelMod) + itemMod.attackdamage,
            attackspeed : (this.props.championData.attackspeedperlevel * levelMod) + itemMod.attackspeed,
            spelldamage : itemMod.spelldamage
        }
        return (
            <div id='ChampionStats' className='column has-text-white'>
                <h5>Health: {currentStats.hp}</h5>
                <h5>Mana: {currentStats.mp}</h5>
                <h5>Armour: {currentStats.armor}</h5>
                <h5>Magic Resist: {currentStats.spellblock}</h5>
                <h5>Attack Damage: {currentStats.attackdamage}</h5>
                <h5>Attack Speed: {`${this.props.championData.attackspeed} + ${currentStats.attackspeed}%`}</h5>
                <h5>Ability Power: {currentStats.spelldamage}</h5>
            </div>
        )
    }

}