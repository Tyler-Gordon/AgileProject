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
            <div className='section' id='CalcContainer'>
                <div>

                    <div id='CalcChampIconContainer' className='media'>
                        <form id='CalcPlayerLevel' className='media-left'>
                            <input id='CalcPlayerLevelInput' type="number" name='Level' min="1" max="18"></input>
                        </form>
                        <div className='media-left'>
                            <img id='CalcChampionIcon' src={this.state.selectedChampion.icon} onClick={()=>{ShowChampionContainer()}} onBlur={()=>{HideChampionContainer()}} height='150px' width='150px'></img>
                        </div>

                        <div id='CalcStatBlock' className='media-content'>
                            <ul>
                                <li>Health: {this.state.championData.hp}</li>
                                <li>Mana: {this.state.championData.mp}</li>
                                <li>Movement Speed: {this.state.championData.movespeed}</li>
                                <li>Armour: {this.state.championData.armor}</li>
                                <li>Spell Block: {this.state.championData.spellblock}</li>
                            </ul>
                        </div>
                        <div id='CalcStatBlock' className='media-content'>
                            <ul>
                                <li>Attack Range: {this.state.championData.attackrange}</li>
                                <li>Attack Damage: {this.state.championData.attackdamage}</li>
                                <li>Spell Damage: {this.state.championData.spelldamage}</li>
                                <li>Attack Speed: {this.state.championData.attackspeed}</li>
                            </ul>
                        </div>

                    </div>

                    <div id='CalcSearch'>
                        <div>
                        <input className='ChampionInput input' type="text" id="userInput" onKeyUp={()=>{search()}}></input>

                        </div>
                        <ChampionList id='AppCentering' onMouseOver={this.onMouseOver.bind(this)} onClick={this.onClick.bind(this)} champions={this.state.champions}/>
                    </div>
                    <div id='CalcPlayerSpellContainer' className='section container level'>
                        <img height='50px' with='50px' src={this.state.championData.autoattackicon}></img>    
                        <img height='50px' with='50px' src={this.state.championData.qicon}></img>    
                        <img height='50px' with='50px' src={this.state.championData.wicon}></img>    
                        <img height='50px' with='50px' src={this.state.championData.eicon}></img>    
                        <img height='50px' with='50px' src={this.state.championData.ricon}></img>    
                    </div>
                </div>        
            </div>
        )
    }
}