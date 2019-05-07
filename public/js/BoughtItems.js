class BoughtItems extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        hasItem1: false,
        hasItem2: false,
        hasItem3: false,
        hasItem4: false,
        hasItem5: false,
        hasItem6: false
    }

    render() {
        return (
            <div className='level'>
                {this.state.hasItem1 ? null : <PlayerItem icon={'../Images/EmptyItem.png'} stats='Empty Stats' />}
                {this.state.hasItem2 ? null : <PlayerItem icon={'../Images/EmptyItem.png'} stats='Empty Stats' />}
                {this.state.hasItem3 ? null : <PlayerItem icon={'../Images/EmptyItem.png'} stats='Empty Stats' />}
                {this.state.hasItem4 ? null : <PlayerItem icon={'../Images/EmptyItem.png'} stats='Empty Stats' />}
                {this.state.hasItem5 ? null : <PlayerItem icon={'../Images/EmptyItem.png'} stats='Empty Stats' />}
                {this.state.hasItem6 ? null : <PlayerItem icon={'../Images/EmptyItem.png'} stats='Empty Stats' />}
            </div>
        )
    }
}