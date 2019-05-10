class ItemList extends React.Component {
    render() {
        const ItemList = this.props.items.map((item) =>
            <Item key={item.id} number={this.props.number} handleItemChosen={this.props.handleItemChosen.bind(this)} chooseItem={this.props.chooseItem.bind(this)} item={item}/>
        );
        return(
            <div className="modal is-active is-clipped">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <ul id='ItemList' className='list'>{ItemList}</ul>
                </div>
                <button className="modal-close is-large" aria-label="close"></button>
            </div>
        )
    }
};