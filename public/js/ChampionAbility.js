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
            <div className='col d-inline-flex justify-content-center'>
                <img src={this.state.icon} height='70px' width='70px'></img>
                <h3>{this.state.stats}</h3>
            </div>
        )
    }
}