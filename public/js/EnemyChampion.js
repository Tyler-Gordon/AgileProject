class EnemyChampion extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        isEnemy : false,
        selectedChampion: this.props.selectedChampion,
        championData : this.props.championData
    }

    render () {
        return (
            <section className='section'>
                <div className='container'>
                    <div className='columns'>
                        <div id='ChampionStats' className='column'>
                            <h5>Health: {this.state.championData.hp}</h5>
                            <h5>Mana: {this.state.championData.mp}</h5>
                            <h5>Armour: {this.state.championData.armor}</h5>
                            <h5>Magic Resist: {this.state.championData.spellblock}</h5>
                        </div>
                        <BoughtItems items={this.props.items}  />
                        <div className='column'>
                            <input className='input' id='PlayerLevel' type='number' name="quantity" min="1" max="18"></input>
                            <img src={this.state.selectedChampion.icon}></img>
                        </div>
                        <div className='column'>
                            <h1 id='ChampionName'>{this.state.selectedChampion.name}</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
