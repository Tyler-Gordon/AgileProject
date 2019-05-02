class Champion extends React.Component {
    constructor(props){
        super(props)
    }

    state = {champion:this.props.champion}
    render () {
        return (
            <li id='ChampionListItem' onMouseOver={()=>{this.props.onMouseOver(this.state.champion)}} 
                                                        onClick={()=>{this.props.onClick(this.state.champion); HideChampionContainer(); HideCalcChampionContainer()}} 
                                                        className='list-item'>
                <a>
                    <br></br>
                    <img src={this.state.champion.icon} width='100px' height='100px'></img>
                    <p id='ChampionName'>{this.state.champion.name}</p>
                </a>
            </li>
        )
    }
}