class ChampionList extends React.Component {
    constructor(props){
        super(props)
    }

    state = {champions : this.props.champions}

    render(){
        const ChampionsList = this.state.champions.map((champion) =>
            <Champion key={champion.id} onClick={this.props.onClick.bind(this)} champion={champion}/>
        );
        return(
            <ul id='ChampionList' className='list has-background-dark'>{ChampionsList}</ul>
        )
    }
};