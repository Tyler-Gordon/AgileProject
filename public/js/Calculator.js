class Calculator extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        isEnemy : false,
        selectedChampion : this.props.selectedChampion,
        championData : this.props.championData,
        enemyChampion : null,
        enemyData : null
    }

    onClick(champion) {
        fetch(`/choose?id=${champion.id}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    enemyChampion : champion,
                    isEnemy : true,
                    enemyData : res
                })
            })
            .catch((err) => {
                return <div> {err} </div>
            });
    }

    render() {
        return (
            <section className="section">
                <PlayerChampion champions={this.props.champions} championData={this.state.championData} selectedChampion={this.state.selectedChampion} items={this.props.itemData} />
                <section className="section">
                    <div className="container">
                        <div id='ChampionSkills' className='level'>
                            <ChampionAbility icon={this.state.championData.qicon} stats='Test data'/>
                            <ChampionAbility icon={this.state.championData.wicon} stats='Test data'/>
                            <ChampionAbility icon={this.state.championData.eicon} stats='Test data'/>
                            <ChampionAbility icon={this.state.championData.ricon} stats='Test data'/>
                            <ChampionAbility icon={this.state.championData.passiveicon} stats='Test data'/>
                        </div>
                    </div>
                </section>
                {this.state.isEnemy ? <EnemyChampion champions={this.props.champions} championData={this.state.enemyData} selectedChampion={this.state.enemyChampion} /> : null}
                <section className="section">
                    <div className="container has-text-centered">
                        <div className="column is-half is-offset-6">
                        <input className='input' placeholder='Select an enemy...' type="text" id="userInput" onInput={()=>{search('ChampionList','userInput')}}></input>
                            <div id='ChampionListContainer'>
                                <ChampionList onClick={this.onClick.bind(this)} champions={this.props.champions}/>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}