class ChampionList extends React.Component {
    render(){
        const ChampionsList = this.props.champions.map((champion) =>
            <Champion key={champion.id} onClick={this.props.onClick.bind(this)} champion={champion}/>
        );
        return (
            <ul id='ChampionList' className='list'>{ChampionsList}</ul>
        )
    }
};