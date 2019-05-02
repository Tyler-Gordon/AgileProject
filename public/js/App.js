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
                <section className={"hero is-full"} id='HeroBanner'>
                    <div className={"hero-body"}>
                        <span className={"section"}>
                            <h1 className={"title container is-size-1 has-text-dark has-text-center level"}>
                                Lolpad
                                <img src='../images/logo2.png' width='100px' height='100px'></img>

                            </h1>
                        </span>
                        <div className='container'>
                            <input className='ChampionInput input' type="text" id="userInput" onFocus={()=>{ShowChampionContainer()}} onKeyUp={()=>{search()}}></input>
                            <br></br>
                            <ChampionList id='AppCentering' onMouseOver={this.onMouseOver.bind(this)} 
                                                            onClick={this.onClick.bind(this)} 
                                                            champions={this.state.champions}/>
                        </div>
                    </div>
                </section>
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