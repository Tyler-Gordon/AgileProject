function ChampionList(props) {
    const champions = props.champions;
    
    const liStyle = {
        float: 'left',
        marginTop: '10px',
        width: "70px"
    }
    
    const ulStyle={
        display:'block', 
        liststyletype: 'none'
    }

    function getChampionSelection(champion) {
        console.log(champion);
     }

    const listItems = champions.map((champion) =>
        <li onClick={()=>getChampionSelection(champion)} id='liItem' style={liStyle}>
            <a onClick={HideChampionContainer} className={'list-item'} href='#'>
                <img src='https://www.mobafire.com/images/avatars/aatrox-classic.png' height='64' width='64'></img>
                <div>
                    {champion}
                </div>
            </a>
        </li>
    );
    
    return (
      <ul style={ulStyle} className={'list has-background-dark'} id="ChampionUL">{listItems}</ul>
    );
}


const champions = ['Aatrox','Teemo','Caitlyn'];
ReactDOM.render(
  <ChampionList champions={champions} />,
  document.getElementById('root')
);