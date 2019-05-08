class PlayerItem extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        stats: this.props.stats
    }

    render() {
        return (
            <div id='Item' className='level-item'>
                <img src={this.props.icon} height='70px' width='70px'></img>
            </div>
        )
    }
}