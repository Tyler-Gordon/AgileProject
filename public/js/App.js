class App extends React.Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this);
    }

    state = {
        choosing: true,
        selectedChampion: null,
        championData: null,
        itemData : null
    }

    onClick(champion) {
        fetch(`/choose?id=${champion.id}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    selectedChampion: champion,
                    choosing: false,
                    championData: res
                })
            })
            .catch((err) => {
                return <div > {err} </div>
            });
        fetch('/items')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    itemData : res
                })
            })
            .catch((err) => {
                return <div> {err} </div>
            })
    }
    

    render() {
        if (this.state.choosing) {
            return (
                <section className='section has-text-centered'> 
                    <div className='container'>
                        <div className='columns'>
                            <div className='column is-8'>
                                <h1 id='Title'>Lolpad</h1>
                                <h1 id='Subtitle'>Intuitive Damage Calculator</h1>
                                <input id='ChampionInputMainPage' className='input' placeholder='Select a champion...' type='text' id='userInput' onFocus={()=>{ShowChampionContainer()}} onInput={()=>{search('ChampionList','userInput')}} onBlur={()=>{HideChampionContainer()}} />
                                <div id='ChampionListContainer'>
                                    <ChampionList onClick={this.onClick} champions={this.props.champions} />
                                </div>
                            </div>

                            <div className='column is-narrow'>
                                <section className='section'>
                                    <div className='card box has-text-white'>
                                        <div className='card-header has-background-dark'>
                                            <div className='card-header-title has-text-white'>
                                                <h3>Step 1</h3>
                                            </div>
                                            <div className='card-header-icon'>
                                                <i className='far fa-hand-pointer' />
                                            </div>
                                        </div>
                                        <div className='card-content'>
                                            <h3>Choose your champion</h3>
                                        </div>
                                    </div>
                                    <div className='card box has-text-white'>
                                        <div className='card-header has-background-dark'>
                                            <div className='card-header-title has-text-white'>
                                                <h3>Step 2</h3>
                                            </div>
                                            <div className='card-header-icon'>
                                                <i className='fas fa-sitemap' />
                                            </div>
                                        </div>
                                        <div className='card-content'>
                                            <h3>Select your items, levels, and enemy</h3>
                                        </div>
                                    </div>
                                    <div className='card box has-text-white'>
                                        <div className='card-header has-background-dark'>
                                            <div className='card-header-title has-text-white'>
                                                <h3>Step 3</h3>
                                            </div>
                                            <div className='card-header-icon'>
                                                <i className='fas fa-calculator' />
                                            </div>
                                        </div>
                                        <div className='card-content'>
                                            <h3>We will calculate for you</h3>
                                        </div>
                                    </div>
                                    <div className='card box has-text-white'>
                                        <div className='card-header has-background-dark'>
                                            <div className='card-header-title has-text-white'>
                                                <h3>Features</h3>
                                            </div>
                                            <div className='card-header-icon'>
                                                <i className='fas fa-cogs' />
                                            </div>
                                        </div>
                                        <div className='card-content'>
                                            <h3>Easy to use, fast results</h3>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <Calculator champions={this.props.champions} championData={this.state.championData} selectedChampion={this.state.selectedChampion} itemData={this.state.itemData} /> 
            )
        }
    }
}