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

    const listItems = champions.map((champion) =>
        <li style={liStyle}>
            <a class='list-item' href="#">
                <img src='https://www.mobafire.com/images/avatars/aatrox-classic.png' height='50' width='50'></img>
                <div>
                    {champion}
                </div>
            </a>
        </li>
    );
    
    return (
      <ul style={ulStyle}class='list' id="myUL">{listItems}</ul>
    );
}

const champions = ['Aatrox','Teemo','Caitlyn'];
ReactDOM.render(
  <ChampionList champions={champions} />,
  document.getElementById('root')
);