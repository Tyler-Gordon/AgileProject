class ChampionList extends React.Component {
    constructor(props){
        super(props)
    }

    state = {champions : this.props.champions}

    render(){
        const ChampionsList = this.state.champions.map((champion) =>
            <Champion key={champion.id} onMouseOver={this.props.onMouseOver.bind(this)} onClick={this.props.onClick.bind(this)} champion={champion}/>
        );
        return(
            <ul id='ChampionList' className='list'>{ChampionsList}</ul>
        )
    }
};