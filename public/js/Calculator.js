class Calculator extends React.Component {
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
            console.log(this.state.selectedChampion),
            <div className='section has-background-light'>
                <div>
                    <img src={this.state.selectedChampion.icon}></img>    
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