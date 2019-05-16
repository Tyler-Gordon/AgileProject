class Champion extends React.Component {
    render() {
        return (
            <li id='ChampionListItem' onMouseDown={()=>{this.props.onClick(this.props.champion); HideChampionContainer()}} className='list-item'>
                <a>
                    <img src={this.props.champion.icon} width='50px' height='50px'></img>
                    <h5>{this.props.champion.name}</h5>
                </a>
            </li>
        )
    }
}