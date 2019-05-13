class Calculator extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        enemyChosen: false,
        selectedChampion : this.props.selectedChampion,
        championData : this.props.championData,
        enemyChampion : null,
        enemyData : null,
    
        aadamage: null,
        aatype: null,

        qdamage: null,
        qtype: null,
        qlevel: 1,
        
        wdamage: null,
        wtype: null,
        wlevel: 1,

        edamage: null,
        etype: null,
        elevel: 1,

        rdamage: null,
        rtype: null,
        rlevel: 1,
    }

    onClick(champion) {
        fetch(`/choose?id=${champion.id}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    enemyChampion : champion,
                    enemyData : res,
                    enemyChosen : true
                })
            })
            .catch((err) => {
                return(<div> {err} </div>)
            });
    }

    calculate(){
        var body;
        if (this.state.enemyData.hp != null){
            body = {
                "player" : {
                    "id" : this.state.selectedChampion.id,
                    "hp" : this.state.championData.hp,
                    "mp" : this.state.championData.mp,
                    "movespeed" : this.state.championData.movespeed,
                    "armor" : this.state.championData.armor,
                    "spellblock" : this.state.championData.spellblock,
                    "attackdamage" : this.state.championData.attackdamage,
                    "spelldamage" : this.state.championData.spelldamage,
                    "attackspeed" : this.state.championData.attackspeed,
                    "flatarmorpenetration" : this.state.championData.flatarmorpenetration,
                    "percentarmorpenetration" : this.state.championData.percentarmorpenetration,
                    "flatspellpenetration" : this.state.championData.flatspellpenetration,
                    "percentspellpenetration" : this.state.championData.percentspellpenetration,
                    "qlevel" : this.state.qlevel,
                    "wlevel" : this.state.wlevel, 
                    "elevel" : this.state.elevel,
                    "rlevel" : this.state.rlevel
                    },
                "enemy" : {
                    "hp" : this.state.enemyData.hp,
                    "armor" : this.state.enemyData.armor,
                    "spellblock" : this.state.enemyData.spellblock
                }
            }
        }
        else{
            body = {
                "player" : {
                    "id" : this.state.selectedChampion.id,
                    "hp" : this.state.championData.hp,
                    "mp" : this.state.championData.mp,
                    "movespeed" : this.state.championData.movespeed,
                    "armor" : this.state.championData.armor,
                    "spellblock" : this.state.championData.spellblock,
                    "attackdamage" : this.state.championData.attackdamage,
                    "spelldamage" : this.state.championData.spelldamage,
                    "attackspeed" : this.state.championData.attackspeed,
                    "flatarmorpenetration" : this.state.championData.flatarmorpenetration,
                    "percentarmorpenetration" : this.state.championData.percentarmorpenetration,
                    "flatspellpenetration" : this.state.championData.flatspellpenetration,
                    "percentspellpenetration" : this.state.championData.percentspellpenetration,
                    "qlevel" : this.state.qlevel,
                    "wlevel" : this.state.wlevel, 
                    "elevel" : this.state.elevel,
                    "rlevel" : this.state.rlevel
                    },
                "enemy" : {
                    "hp" : 0,
                    "armor" : 0,
                    "spellblock" : 0
                }
            }
        }

        console.log(body)
        fetch(`/calculate`,{
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                aadamage : res.aa[0].damage.toFixed(1),
                aatype : res.aa[0].type,
                qdamage : res.q[0].damage.toFixed(1),
                qtype : res.q[0].type,
                wdamage : res.w[0].damage.toFixed(1),
                wtype : res.w[0].type,
                edamage : res.e[0].damage.toFixed(1),
                etype : res.e[0].type,
                rdamage : res.r[0].damage.toFixed(1),
                rtype : res.r[0].type
            })
        })
        .catch((err) => {
            console.log(err)
        });
    }
    renderEnemyInput(){
        return(<input className='input' placeholder='Select an enemy...' type="text" id="userInput" onInput={()=>{search('ChampionList','userInput')}}></input>)
    }
    render() {
        return (
            <section className="section">
                <PlayerChampion champions={this.props.champions} championData={this.state.championData} selectedChampion={this.state.selectedChampion} items={this.props.itemData} />
                <section className="section">
                    <div className="container">
                        <div id='ChampionSkills' className='level'>
                            <ChampionAbility icon={this.state.championData.qicon} damage={this.state.qdamage} type={this.state.qtype} level={this.state.qlevel}/>
                            <ChampionAbility icon={this.state.championData.wicon} damage={this.state.wdamage} type={this.state.wtype} level={this.state.wlevel}/>
                            <ChampionAbility icon={this.state.championData.eicon} damage={this.state.edamage} type={this.state.etype} level={this.state.elevel}/>
                            <ChampionAbility icon={this.state.championData.ricon} damage={this.state.rdamage} type={this.state.rtype} level={this.state.rlevel}/>
                            <ChampionAbility icon={this.state.championData.passiveicon} damage={this.state.aadamage} type={this.state.aatype}/>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container has-text-centered">
                        <div className="columns is-centered">                   
                            <div className="column is-half is-centered">
                                { this.state.enemyChosen ? null : this.renderEnemyInput() }
                                <div id='ChampionListContainer'>    
                                    <ChampionList onClick={this.onClick.bind(this)} champions={this.props.champions}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {this.state.enemyChosen ? <EnemyChampion champions={this.props.champions} championData={this.state.enemyData} selectedChampion={this.state.enemyChampion} items={this.props.itemData}  /> : null}

                <section className="section">
                    <div className="container has-text-centered">
                        {this.state.enemyChosen ? <button id='CalculateButton' className={'button is-large is-link'} onClick={()=>{this.calculate()}}>Calculate</button> : null }
                    </div>
                </section>
            </section>
        )
    }
}