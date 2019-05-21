class ItemList extends React.Component {
    render() {
        const ItemList = this.props.items.map((item) =>
            <Item key={item.id} number={this.props.number} handleItemChosen={this.props.handleItemChosen.bind(this)} chooseItem={this.props.chooseItem.bind(this)} item={item}/>
        );

        var specialInputStyle ={
            borderRadius :'50px 0px 0px 0px'
        }
        return(
            <div className="modal is-active is-clipped" id='ItemListModal'ref='Modal'>
                <div className="modal-background"></div>
                <div className="modal-content">
                <input className='input' style={specialInputStyle} placeholder='Select an item...' type="text" id="userInput" onInput={()=>{search('ItemList','userInput')}}></input>
                    <ul id='ItemList' className='list'>{ItemList}</ul>
                </div>
                <button className="modal-close is-large" aria-label="close"></button>
            </div>
        )
    }
};