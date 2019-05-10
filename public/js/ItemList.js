class ItemList extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const ItemList = this.props.items.map((item) =>
            <Item key={item.id} number={this.props.number} handleItemChosen={this.props.handleItemChosen.bind(this)} chooseItem={this.props.chooseItem.bind(this)} item={item}/>
        );
        return(
            <ul id='ItemList' className='list'>{ItemList}</ul>
        )
    }
};