class App extends React.Component {
    constructor(props) {
        super(props);

    };

    state = {
        choosing: true,
        selectedChampion: null,
        championData: null
    };

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
            })
    }
    
    render () {
        if (this.state.choosing){
            return(
                <section className='section has-text-centered'> 
                    <div className='container'>
                        <div className='columns'>
                            <div className='column is-8'>
                                <h1 id='Title'>Lolpad</h1>
                                <h1 id='Subtitle'>Intuitive Damage Calculator</h1>
                                <input className='input' placeholder='Select a champion...' type="text" id="userInput" onInput={()=>{search('ChampionList','userInput')}}></input>
                                <div id='ChampionListContainer'>
                                    <ChampionList onClick={this.onClick.bind(this)} champions={this.props.champions}/>
                                </div>
                            </div>

                            <div className='column is-4'>
                                <img id='TeemoImage' src='../images/teemo.gif'></img>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        else{
            return(
                <Calculator champions={this.props.champions} championData={this.state.championData} selectedChampion={this.state.selectedChampion} /> 
            )
        }
    }
}