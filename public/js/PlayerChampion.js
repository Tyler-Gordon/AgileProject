class PlayerChampion extends React.Component {
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
            <section id='PlayerChampion' className='section'>
                <div className='container'>
                    <div className='columns is-vcentered'>

                        <div className='column is-one-fifths'>
                            <h1 id='ChampionName'>{this.props.selectedChampion.name}</h1>
                        </div>

                        <div className='column is-one-fifths'>
                            <div>
                                <img src={this.props.selectedChampion.icon} width={'70%'} height={'70%'}/>
                            </div>
                            <input className='input' id='PlayerLevel' type='number' name="quantity" value={this.state.level} min="1" max="18" onChange={this.handleChange} />
                        </div>
                        
                        <BoughtItems items={this.props.items} />

                        <ChampionStats championData={this.props.championData} level={this.state.level} />

                    </div>
                </div>
            </section>
        )
    }
}
