class Calculator extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        isEnemy : false,
        championData : this.props.championData
    }
    
    render () {
        return (
            <div>
                {/* <Player />
                <Spells /> */}
                {this.state.isEnemy && 
                    // remove br tags when enemy is implemented
                    <br></br>
                    //<Enemy />
                }
            </div>
        )
    }
}