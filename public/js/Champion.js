class Champion extends React.Component {
    constructor(props){
        super(props)
    }

    state = {champion:this.props.champion}
    render () {
        return (
            <li id='ChampionListItem' onMouseOver={()=>{this.props.onMouseOver(this.state.champion)}} onClick={()=>{this.props.onClick(this.state.champion); HideChampionContainer()}} className='list-group-item'>
                <a>
                    <img src={this.state.champion.icon} width='50px' height='50px'></img>
                    <p>{this.state.champion.name}</p>
                </a>
            </li>
        )
    }
}