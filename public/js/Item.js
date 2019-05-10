class Item extends React.Component {
    render() {
        return (
            <li id='ItemListItem' onClick={()=>{this.props.chooseItem(this.props.item,this.props.number),this.props.handleItemChosen()}} className='list-item'>
                <a>
                    <img src={this.props.item.icon} width='50px' height='50px'></img>
                    <h5>{this.props.item.name}</h5>
                </a>
            </li>
        )
    }
}