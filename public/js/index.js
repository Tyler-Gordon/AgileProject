function ChampionList(props) {
    const champions = props.champions;
    
    const liStyle = {
        float: 'left',
        marginTop: '10px',
        width: "100px"
    }
    
    const ulStyle={
        display:'block', 
        liststyletype: 'none'
    }

    function getChampionSelection(champion) {
        console.log(champion)
        document.getElementById('userInput').placeholder = champion
        console.log(document.getElementById('userInput').placeholder)
    }

    const listItems = champions.map((champion) =>
        <li onClick={()=>getChampionSelection(champion.name)} id='liItem' style={liStyle}>
            <a onClick={HideChampionContainer} className={'list-item'} href='#'>
                <img src={champion.icon} height='100' width='100'></img>
                <div>
                    {champion.name}
                </div>
            </a>
        </li>
    );
    
    return (
      <ul style={ulStyle} className={'list has-background-dark'} id="ChampionUL">{listItems}</ul>
    );
}
var champions;

fetch('/champions')
    .then(
        function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
            champions = data;
            ReactDOM.render(
                <ChampionList champions={champions} />,
                document.getElementById('root')
              );
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });