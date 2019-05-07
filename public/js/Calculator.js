class Calculator extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        champions : this.props.champions,
        isEnemy : false,
        selectedChampion : this.props.selectedChampion,
        championData : this.props.championData,
        enemyChampion : null,
        enemyData : null
    }
    
    onMouseOver(champion){
        //document.getElementById('HeroBanner').style.background= `url('${champion.image}')`
        //document.getElementById('HeroBanner').style.backgroundSize = 'cover'
    }

    onClick(champion){
        fetch(`/choose?id=${champion.id}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    enemyChampion : champion,
                    isEnemy : true,
                    enemyData : res
                })
            })
            .catch((err)=>{
                return <div>{err}</div>
            })
    }

    render () {
        return (
            console.log(this.state.selectedChampion),
            <section className="section">
                <PlayerChampion champions={this.state.champions} championData={this.state.championData} selectedChampion={this.state.selectedChampion} />
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
                {this.state.isEnemy ? <EnemyChampion champions={this.state.champions} championData={this.state.enemyData} selectedChampion={this.state.enemyChampion} /> : null}
                <section className="section">
                    <div className="container has-text-centered">
                        <div className="column is-half is-offset-6">
                            <input className='input' placeholder='Select an enemy...' type="text" id="userInput" onInput={()=>{search()}}></input>
                            <div id='ChampionListContainer'>
                                <ChampionList className='container' onMouseOver={this.onMouseOver.bind(this)} onClick={this.onClick.bind(this)} champions={this.state.champions}/>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}