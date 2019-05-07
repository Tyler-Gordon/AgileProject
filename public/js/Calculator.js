class Calculator extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
<<<<<<< HEAD
        champions : this.props.champions,
        isEnemy : false,
        selectedChampion : this.props.selectedChampion,
        championData : this.props.championData,
        enemyChampion : null,
        enemyData : null
    }
    
    onMouseOver(champion){
=======
        champions: this.props.champions,
        isEnemy: false,
        selectedChampion: this.props.selectedChampion,
        championData: this.props.championData
    }


    onMouseOver(champion) {
>>>>>>> upstream/master
        //document.getElementById('HeroBanner').style.background= `url('${champion.image}')`
        //document.getElementById('HeroBanner').style.backgroundSize = 'cover'
    }

    onClick(champion) {
        fetch(`/choose?id=${champion.id}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
<<<<<<< HEAD
                    enemyChampion : champion,
                    isEnemy : true,
                    enemyData : res
=======
                    selectedChampion: champion,
                    choosing: false,
                    championData: res
>>>>>>> upstream/master
                })
            })
            .catch((err) => {
                return <div> {err} </div>
            })
    }

    render() {
        return (
<<<<<<< HEAD
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
=======
            <div className='col'>
            <br></br>
                <div className='row align-items-center'>

                    <div className='col-md-2 text-center'>
                        <h1 id='ChampionName'>{this.state.selectedChampion.name}</h1>
                    </div>
                    <div className='col-md-3'>
                        <input className='form-control' id='PlayerLevel' type='number' name="quantity" min="1" max="18"></input>
                        <img src={this.state.selectedChampion.icon}></img>
                    </div>

                    <div className='col-md-3'>
                        <div className='row'>
                            <PlayerItem icon={'../Images/EmptyItem.png'} stats='Empty Stats'/>
                            <PlayerItem icon={'../Images/EmptyItem.png'} stats='Empty Stats'/>
                            <PlayerItem icon={'../Images/EmptyItem.png'} stats='Empty Stats'/>
                        </div>
                        <br></br>
                        <div className='row'>
                            <PlayerItem icon={'../Images/EmptyItem.png'} stats='Empty Stats'/>
                            <PlayerItem icon={'../Images/EmptyItem.png'} stats='Empty Stats'/>
                            <PlayerItem icon={'../Images/EmptyItem.png'} stats='Empty Stats'/>
>>>>>>> upstream/master
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