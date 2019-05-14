class ChampionStats extends React.Component {
    render() {
        let currentStats;
        let levelMod = this.props.level - 1;
        let itemMod = {
        }
        currentStats = {
            hp : this.props.championData.hp + (this.props.championData.hpperlevel * levelMod),
            mp : this.props.championData.mp + (this.props.championData.mpperlevel * levelMod),
            armor : this.props.championData.armor + (this.props.championData.armorperlevel * levelMod),
            spellblock : this.props.championData.spellblock + (this.props.championData.spellblockperlevel * levelMod),
            attackdamage : this.props.championData.attackdamage + (this.props.championData.attackdamageperlevel * levelMod),
            attackspeed : this.props.championData.attackspeed + (this.props.championData.attackspeedperlevel * levelMod)
        }
        return (
            <div id='ChampionStats' className='column has-text-white'>
                <h5>Health: {currentStats.hp}</h5>
                <h5>Mana: {currentStats.mp}</h5>
                <h5>Armour: {currentStats.armor}</h5>
                <h5>Magic Resist: {currentStats.spellblock}</h5>
                <h5>Attack Damage: {currentStats.attackdamage}</h5>
                <h5>Attack Speed: {currentStats.attackspeed}</h5>
            </div>
        )
    }

}