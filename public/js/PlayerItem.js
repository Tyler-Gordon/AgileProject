class PlayerItem extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        stats: this.props.stats,
        isChoosing: false,
    }

    handleItemClick(){
        this.setState({
            isChoosing : true
        })
    }
    handleItemChosen(){
        this.setState({
            isChoosing: false
        })
    }
    
    render() {
        if (this.state.isChoosing) {
            return (
                <div>
                    <div className='level-item' onClick={()=>{this.handleItemClick()}}>
                        <img id='Item' src={this.props.icon} height='70px' width='70px'></img>
                    </div>
                    <ItemList number={this.props.number} handleItemChosen={this.handleItemChosen.bind(this)} chooseItem={this.props.chooseItem.bind(this)} items={this.props.items} />   
                </div>
            )
        } else {
            return (
                <div className='level-item' onClick={()=>{this.handleItemClick()}}>
                    <img id='Item' src={this.props.icon} height='70px' width='70px'></img>
                </div>
            )
        }
    }
}