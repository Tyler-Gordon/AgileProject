class PlayerChampion extends React.Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        level: 1,
        selectedChampion : this.props.selectedChampion,
        championData : this.props.championData,
    }

    handleChange(event) {
        this.setState({
            level : event.target.value
        });
    }

    displayStats() {
        let currentStats;
        let levelMod = this.state.level - 1;
        currentStats = {
            hp : this.state.championData.hp + (this.state.championData.hpperlevel * levelMod),
            mp : this.state.championData.mp + (this.state.championData.mpperlevel * levelMod),
            armor : this.state.championData.armor + (this.state.championData.armorperlevel * levelMod),
            spellblock : this.state.championData.spellblock + (this.state.championData.spellblockperlevel * levelMod),
            attackdamage : this.state.championData.attackdamage + (this.state.championData.attackdamageperlevel * levelMod),
            attackspeed : this.state.championData.attackspeed + (this.state.championData.attackspeedperlevel * levelMod)
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

    render () {
        return (
            <section id='PlayerChampion' className='section'>
                <div className='container'>
                    <div className='columns is-vcentered'>

                        <div className='column is-one-fifths'>
                            <h1 id='ChampionName'>{this.state.selectedChampion.name}</h1>
                        </div>

                        <div className='column is-one-fifths'>
                            <div>
                                <img src={this.state.selectedChampion.icon} width={'70%'} height={'70%'}/>
                            </div>
                            <input className='input' id='PlayerLevel' type='number' name="quantity" value={this.state.level} min="1" max="18" onChange={this.handleChange} />
                        </div>
                        
                        <div>
                            <BoughtItems items={this.props.items} />
                        </div>

                        {this.displayStats()}

                    </div>
                </div>
            </section>
        )
    }
}
