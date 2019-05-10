class BoughtItems extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {	
        item1: {
            id:"1",
            name:"Empty",
            icon:'../Images/emptyItem.png',
            stats: null
        },
        item2: {
            id:"2",
            name:"Empty",
            icon:'../Images/emptyItem.png',
            stats: 'Empty'
        },
        item3: {
            id:"3",
            name:"Empty",
            icon:'../Images/emptyItem.png',
            stats: 'Empty'
        },
        item4: {
            id:"4",
            name:"Empty",
            icon:'../Images/emptyItem.png',
            stats: 'Empty'
        },
        item5: {
            id:"5",
            name:"Empty",
            icon:'../Images/emptyItem.png',
            stats: 'Empty'
        },
        item6: {
            id:"6",
            name:"Empty",
            icon:'../Images/emptyItem.png',
            stats: 'Empty'
        }
    }
    chooseItem(stats,number){
        console.log(number)
        this.setState({ 
            [number]: {
                name:stats.name,
                icon: stats.icon,
                stats: stats.stats
            }
         });
    }

    render() {
        return (
            <div className='level'>
                {this.state.hasItem1 ? null : <PlayerItem icon={this.state.item1.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} stats={this.state.item1.stats} number={'item1'}/>}
                {this.state.hasItem2 ? null : <PlayerItem icon={this.state.item2.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} stats={this.state.item2.stats} number={'item2'}/>}
                {this.state.hasItem3 ? null : <PlayerItem icon={this.state.item3.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} stats={this.state.item3.stats} number={'item3'}/>}
                {this.state.hasItem4 ? null : <PlayerItem icon={this.state.item4.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} stats={this.state.item4.stats} number={'item4'}/>}
                {this.state.hasItem5 ? null : <PlayerItem icon={this.state.item5.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} stats={this.state.item5.stats} number={'item5'}/>}
                {this.state.hasItem6 ? null : <PlayerItem icon={this.state.item6.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} stats={this.state.item6.stats} number={'item6'}/>}
            </div>
        )
    }
}