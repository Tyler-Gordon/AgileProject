class Champion extends React.Component {
    constructor(props){
        super(props)
    }

    state = {champion:this.props.champion}
    render () {
        return (
            <li id='ChampionListItem' onClick={()=>{this.props.onClick(this.state.champion.id)}} className={'list-item'}>
                <a>
                    <img src={this.state.champion.icon} width='50px' height='50px'></img>
                    <p id='ChampionName'>{this.state.champion.name}</p>
                </a>
            </li>
        )
    }
}