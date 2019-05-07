class PlayerChampion extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        champions : this.props.champions,
        isEnemy : false,
        selectedChampion: this.props.selectedChampion,
        championData : this.props.championData
    }

    render () {
        return (
            <section className='section'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column'>
                            <h1 id='ChampionName'>{this.state.selectedChampion.name}</h1>
                        </div>
                        <div className='column'>
                            <input className='input' id='PlayerLevel' type='number' name="quantity" min="1" max="18"></input>
                            <img src={this.state.selectedChampion.icon}></img>
                        </div>
                        <BoughtItems />
                        <div id='ChampionStats' className='column has-text-right'>
                            <h5>Health: {this.state.championData.hp}</h5>
                            <h5>Mana: {this.state.championData.mp}</h5>
                            <h5>Armour: {this.state.championData.armor}</h5>
                            <h5>Magic Resist: {this.state.championData.spellblock}</h5>
                            <h5>Attack Damage: {this.state.championData.attackdamage}</h5>
                            <h5>Attack Speed: {this.state.championData.attackspeed}</h5>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
