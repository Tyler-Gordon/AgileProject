class App extends React.Component{
    constructor(props){
        super(props);
        
    };

    state = {
        champions : this.props.champions,
        choosing : true,
        selectedChampionID: null
    };

    onClick(champion){
        this.setState({
            selectedChampion : champion,
            choosing : false
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
                
                fetch(`/choose?id=${this.state.selectedChampionID}`)
                .then(
                    function(response) {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' + response.status);
                            return;
                        }
                        response.json().then(function(data) {
                            // calc app
                            <Calculator championData={data} />
                        });
                    }
                )
                .catch((err)=>{
                    console.log('Fetch error')
                })
            )
        }
    }
}