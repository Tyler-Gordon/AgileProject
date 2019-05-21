class ChampionAbility extends React.Component {
    render() {
        return (
            <div className='column has-text-centered'>
                <h4>{this.props.ability ? this.props.level : 'Auto'}</h4>
                    <figure>
                        <img src='../images/AbilityLevelUp.png' id='AbilityUp' onClick={()=>{this.props.levelUp(this.props.ability)}} width='64px' />
                        <img src={this.props.icon} width='64px' />
                        <img src='../images/AbilityLevelDown.png' id='AbilityDown' onClick={()=>{this.props.levelDown(this.props.ability)}} width='64px' />
                    </figure>
                <h3 id='AbilityStats' >{this.props.damage}</h3>
                <h3 id='AbilityStats' >{this.props.type}</h3>
            </div>
        )
    }
}