class BoughtItems extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {	
        item1: {
            id:"1",
            name:"Empty",
            icon:'../images/EmptyItem.png',
            stats: 'Empty'
        },
        item2: {
            id:"2",
            name:"Empty",
            icon:'../images/EmptyItem.png',
            stats: 'Empty'
        },
        item3: {
            id:"3",
            name:"Empty",
            icon:'../images/EmptyItem.png',
            stats: 'Empty'
        },
        item4: {
            id:"4",
            name:"Empty",
            icon:'../images/EmptyItem.png',
            stats: 'Empty'
        },
        item5: {
            id:"5",
            name:"Empty",
            icon:'../images/EmptyItem.png',
            stats: 'Empty'
        },
        item6: {
            id:"6",
            name:"Empty",
            icon:'../images/EmptyItem.png',
            stats: 'Empty'
        }
    }

    chooseItem(item, number){
        this.setState({ 
            [number] : {
                name : item.name,
                icon : item.icon,
                stats : item.stats
            }
         });
    }

    render() {
        let itemStats = [
            this.state.item1.stats,
            this.state.item2.stats,
            this.state.item3.stats,
            this.state.item4.stats,
            this.state.item5.stats,
            this.state.item6.stats
        ];
        if (this.props.enemy) {
            return (
            <div className='columns is-marginless'>
                <ChampionStats championData={this.props.championData} level={this.props.level} items={itemStats} enemy={true} />
                <div className='level'>
                    <PlayerItem icon={this.state.item1.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} number='item1' />
                    <PlayerItem icon={this.state.item2.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} number='item2' />
                    <PlayerItem icon={this.state.item3.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} number='item3' />
                    <PlayerItem icon={this.state.item4.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} number='item4' />
                    <PlayerItem icon={this.state.item5.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} number='item5' />
                    <PlayerItem icon={this.state.item6.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} number='item6' />
                </div>
            </div>
        )} else {
            return (
            <div className='columns'>
                <div className='level is-marginless'>
                    <PlayerItem icon={this.state.item1.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} number='item1' />
                    <PlayerItem icon={this.state.item2.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} number='item2' />
                    <PlayerItem icon={this.state.item3.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} number='item3' />
                    <PlayerItem icon={this.state.item4.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} number='item4' />
                    <PlayerItem icon={this.state.item5.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} number='item5' />
                    <PlayerItem icon={this.state.item6.icon} chooseItem={this.chooseItem.bind(this)} items={this.props.items} number='item6' />
                </div>
                <ChampionStats championData={this.props.championData} level={this.props.level} items={itemStats} enemy={false} />
            </div>
        )}
    }
}