class Calculator extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        champions : this.props.champions,
        isEnemy : false,
        selectedChampion: this.props.selectedChampion,
        championData : this.props.championData
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
                    selectedChampion : champion,
                    choosing : false,
                    championData : res
                })
            })
            .catch((err)=>{
                return <div>{err}</div>
            })
    }

    render () {
        return (
            console.log(this.state.selectedChampion),
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
                            <Item icon={'../Images/EmptyItem.png'} stats='Empty Stats'/>
                            <Item icon={'../Images/EmptyItem.png'} stats='Empty Stats'/>
                            <Item icon={'../Images/EmptyItem.png'} stats='Empty Stats'/>
                        </div>
                        <br></br>
                        <div className='row'>
                            <Item icon={'../Images/EmptyItem.png'} stats='Empty Stats'/>
                            <Item icon={'../Images/EmptyItem.png'} stats='Empty Stats'/>
                            <Item icon={'../Images/EmptyItem.png'} stats='Empty Stats'/>
                        </div>
                    </div>
                    <div id='ChampionStats' className='col-md-4'>
                        <h5>Health: {this.state.championData.hp}</h5>
                        <h5>Attack Damage: {this.state.championData.attackdamage}</h5>
                        <h5>Armour: {this.state.championData.armor}</h5>
                    </div>
                </div>
                <br/>
                <br/>
                <div id='ChampionSkills' className='row'>
                    <ChampionAbility icon={this.state.championData.qicon} stats='Test data'/>
                    <ChampionAbility icon={this.state.championData.wicon} stats='Test data'/>
                    <ChampionAbility icon={this.state.championData.eicon} stats='Test data'/>
                    <ChampionAbility icon={this.state.championData.ricon} stats='Test data'/>
                    <ChampionAbility icon={this.state.championData.passiveicon}stats='Test data'/>
                </div>
                <div className='row'>
                    {/* enemy stuff */}
                </div>
            </div>
        )
    }
}