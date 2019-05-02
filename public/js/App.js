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
                <div id='testdiv' className='column'>
                    <br></br>
                    <br></br>

                    <h1 id="title">Lolpad<br></br></h1>
                    {/* <h3>We offer you a calculator that calculates the damage of each champion's abilities.</h3>
                    <h3>Simply choose the champion, the levels, items, and runes, and you can manage your</h3>
                    <h3>game play better. We want to provide easy operation so you can get your results as</h3>
                    <h3>fast as you can.</h3> */}
                    <br></br>
                    <br></br>

                    <h3 id='subtitle'>
                        Intuitive Damage Calculator
                    </h3>
                    <br></br>
                    <br></br>

                    <input placeholder='Select a champion...' className='input is-large' type="text" id="userInput" onFocus={()=>{ShowChampionContainer()}} onKeyUp={()=>{search()}}></input>
                    <div>
                        <br></br>
                        <ChampionList id='AppCentering' onMouseOver={this.onMouseOver.bind(this)} onClick={this.onClick.bind(this)} champions={this.state.champions}/>
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