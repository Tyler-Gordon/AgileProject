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

    render () {
        return (
            <section className='section' id='EnemyChampion'>
                <div className='container'>
                    <div className='columns is-vcentered'>

                        <BoughtItems items={this.props.items} championData={this.props.championData} level={this.state.level} enemy={true} />

                        <div className='column is-one-fifth'>
                            <div>
                                <img src={this.props.selectedChampion.icon} width='175px' height='175px' />
                            </div>
                            <input className='input' id='PlayerLevel' type='number' name="quantity" value={this.state.level} min="1" max="18" onChange={this.handleChange} />
                        </div>

                        <div className='column is-one-fifth'>
                            <h1 id='ChampionName'>{this.props.selectedChampion.name}</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
