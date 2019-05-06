class App extends React.Component{
    constructor(props){
        super(props);
        
    };

    state = {
        champions : this.props.champions,
        choosing : true,
        selectedChampion: null,
        championData : null
    };

    onMouseOver(champion){
        //document.getElementById('HeroBanner').style.background= `url('${champion.image}')`
        //document.getElementById('HeroBanner').style.backgroundSize = 'cover'
        return(0);
    }

    onClick(champion){
        fetch(`/choose?id=${champion.id}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    selectedChampion : champion,
                    choosing : false,
                    championData : res
                })
            })
            .catch((err)=>{
                return <div>{err}</div>
            })
    }

    render () {
        if (this.state.choosing){
            return(  
                <div id='testdiv' className='col row' >
                    <div className='col-md-8 col-sm-12'>
                        <h1 id='Title'>Lolpad</h1>
                        <h1 id='Subtitle'>Intuitive Damage Calculator</h1>
                        <div className='col-md-12 col-sm-2'>
                            <input placeholder='Select a champion...' type="text" id="userInput" onInput={()=>{search()}}></input>
                        </div>

                        <div className='col-10 container container' id='ChampionListContainer' >
                            <ChampionList className='container' onMouseOver={this.onMouseOver.bind(this)} onClick={this.onClick.bind(this)} champions={this.state.champions}/>
                        </div>
                    </div>

                    <div className='col-4 '>
                        <div className='row h-75 align-items-center'>
                            <img id='TeemoImage' src='../images/teemo.gif'></img>
                        </div>
                    </div>
                </div>

            )
        }
        else{
            return(
                <div>
                    <Calculator champions={this.state.champions} championData={this.state.championData} selectedChampion={this.state.selectedChampion} /> 
                </div> 
            )
        }
    }
}