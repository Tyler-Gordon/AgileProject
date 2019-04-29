class App extends React.Component{
    constructor(props){
        super(props);
        
    };

    state = {
        champions : this.props.champions,
        choosing : true,
        selectedChampion: null
    };

    onClick(champion){
        this.setState({
            selectedChampion : champion
        })
    }

    render () {
        if (this.state.choosing){
            return(  
                <div>
                    <input  className='ChampionInput' type="text" id="userInput" onKeyUp={()=>{search()}}></input>
                    <h1>{this.state.selectedChampion}</h1>
                    <ChampionList id='AppCentering' onClick={this.onClick.bind(this)} champions={this.state.champions}/>
                </div>
            )
        }
        else{
            return(
                0 //where the calc react stuff goes
            )
        }
    }
}