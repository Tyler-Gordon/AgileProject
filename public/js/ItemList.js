class ItemList extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const ItemList = this.props.items.map((item) =>
            <Item key={item.id} item={item}/>
        );
        return(
            <ul id='ItemList' className='list'>{ItemList}</ul>
        )
    }
};