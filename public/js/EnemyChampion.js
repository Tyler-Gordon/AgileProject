class EnemyChampion extends React.Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        level : 1
    }

    handleChange(event) {
        this.setState({
            level : event.target.value
        });
    }

    render() {
        return (
            <div id='EnemyChampion' className='container'>
                <div className='box'>
                    <div className='columns is-vcentered'>
                        <div className='column'></div>
                        <BoughtItems items={this.props.items} championData={this.props.championData} level={this.state.level} enemy={true} />
                        <div className='column is-one-fifth has-text-centered'>
                            <h1 id='ChampionName'>{this.props.selectedChampion.name}</h1>
                            <figure>
                                <img src={this.props.selectedChampion.icon} width='60%' />
                            </figure>
                            <input className='input' id='PlayerLevel' type='number' name="quantity" value={this.state.level} min="1" max="18" onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
