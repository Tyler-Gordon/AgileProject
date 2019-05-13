class EnemyChampion extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        selectedChampion: this.props.selectedChampion,
        championData : this.props.championData
    }

    render () {
        return (
            <section className='section' id='EnemyChampion'>
                <div className='container'>
                    <div className='columns is-vcentered'>

                        <div id='EnemyStats' className='column has-text-white'>
                            <h5>Health: {this.state.championData.hp}</h5>
                            <h5>Mana: {this.state.championData.mp}</h5>
                            <h5>Armour: {this.state.championData.armor}</h5>
                            <h5>Magic Resist: {this.state.championData.spellblock}</h5>
                            <h5>Attack Damage: {this.state.championData.attackdamage}</h5>
                            <h5>Attack Speed: {this.state.championData.attackspeed}</h5>
                        </div>

                        <div>
                            <BoughtItems items={this.props.items}  />
                        </div>

                        <div className='column is-one-fifths'>
                            <div>
                                <img src={this.state.selectedChampion.icon} width={'70%'} height={'70%'}></img>
                            </div>
                            <input className='input' id='PlayerLevel' type='number' name="quantity" min="1" max="18"></input>
                        </div>

                        <div className='column is-one-fifths'>
                            <h1 id='ChampionName'>{this.state.selectedChampion.name}</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
