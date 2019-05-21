class Item extends React.Component {
    render() {
        return (
            <li id='ItemListItem' onClick={()=>{this.props.chooseItem(this.props.item,this.props.number),this.props.handleItemChosen()}} className='list-item'>
                <a>
<<<<<<< HEAD
                    <img className='GameItem' src={this.props.item.icon} width='50px' height='50px'></img>
=======
                    <img id='Item' src={this.props.item.icon} width='50px' height='50px'></img>
>>>>>>> upstream/master
                    <h5>{this.props.item.name}</h5>
                </a>
            </li>
        )
    }
}