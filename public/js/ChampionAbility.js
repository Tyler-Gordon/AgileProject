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
            <div className={'card'}>
                <div className='level-item'>
                    <div className={'card-image'}>
                        <img src={this.props.icon} height='64px' width='64px'></img>
                    </div>
                </div>
                <div id='AbilityStatsContainer'>
                    <h3 id='AbilityStats' >{this.props.damage}</h3>
                    <h3 id='AbilityStats' >{this.props.type}</h3>
                </div>
            </div>
        )
    }
}