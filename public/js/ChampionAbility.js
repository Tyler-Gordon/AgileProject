class ChampionAbility extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        damage: this.props.damage,
        type: this.props.type
    }
    render() {
        return (
            <div className='card has-text-centered'>
                {this.props.ability ? this.props.level : 'AA'}
                <div className='card-image'>
                        <img src='../images/AbilityLevelUp.png' id='AbilityUp' onClick={()=>{this.props.levelUp(this.props.ability)}} width='64px' />
                        <img src={this.props.icon} height='64px' width='64px' />
                        <img src='../images/AbilityLevelDown.png' id='AbilityUp' onClick={()=>{this.props.levelDown(this.props.ability)}} width='64px' />
                </div>
                <div id='AbilityStatsContainer'>
                    <h3 id='AbilityStats' >{this.props.damage}</h3>
                    <h3 id='AbilityStats' >{this.props.type}</h3>
                </div>
            </div>
        )
    }
}