class ChampionAbility extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        icon: this.props.icon,
        stats: this.props.stats
    }

    render() {
        return (
            <div className='level-item'>
                <img src={this.state.icon} height='64px' width='64px'></img>
                <h3>{this.state.stats}</h3>
            </div>
        )
    }
}