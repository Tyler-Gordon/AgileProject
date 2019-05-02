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
            <div className='section has-background-light'>
                <div>
                    <form>
                        <input type="number" name='Level' min="1" max="18"></input>
                    </form>
                    <div>
                    <img src={this.state.selectedChampion.icon} onClick={()=>{ShowChampionContainer()}}></img>

                    </div>
                    <div>
                    <ChampionList id='AppCentering' onMouseOver={this.onMouseOver.bind(this)} 
                                                            onClick={this.onClick.bind(this)} 
                                                        champions={this.state.champions}/>
                    </div>
                    <div>
                        <ul>
                            <li>Health: {this.state.championData.hp}</li>
                            <li>Mana: {this.state.championData.mp}</li>
                            <li>Movement Speed: {this.state.championData.movespeed}</li>
                            <li>Armour: {this.state.championData.armor}</li>
                            <li>Spell Block: {this.state.championData.spellblock}</li>
                            <li>Attack Range: {this.state.championData.attackrange}</li>
                            <li>Attack Damage: {this.state.championData.attackdamage}</li>
                            <li>Spell Damage: {this.state.championData.spelldamage}</li>
                            <li>Attack Speed: {this.state.championData.attackspeed}</li>
                        </ul>
                    </div>
                </div>
                {/* <ItemContainer /> */}
                <p>
                    <img src={this.state.championData.autoattackicon}></img>    
                    <img src={this.state.championData.qicon}></img>    
                    <img src={this.state.championData.wicon}></img>    
                    <img src={this.state.championData.eicon}></img>    
                    <img src={this.state.championData.ricon}></img>    

                </p>
            </div>
        )
    }
}