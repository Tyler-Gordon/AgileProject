function search(List,InputBox){
    var userInput = document.getElementById(InputBox).value.toUpperCase();
    var ul = document.getElementById(List);
    var liCollection = ul.getElementsByTagName('li');
    var liArray = [].slice.call(liCollection);

    liArray.forEach(li => {
        li.getElementsByTagName('a')[0].textContent.toUpperCase().includes(userInput) 
        ? li.style.display= '' 
        : li.style.display = 'none'
    });
}

function ShowChampionContainer() {
    var championContainer = document.getElementById('ChampionList')
    championContainer.style.display = 'inline'
    return ('Shown')
}

function HideChampionContainer() {
    var championContainer = document.getElementById('ChampionList')
    championContainer.style.display = 'none'
    return ('Hidden')
}

function ShowItemContainer() {
    var itemContainer = document.getElementById('ItemList')
    itemContainer.style.display = 'inline'
    return ('Shown')
}

function HideItemContainer() {
    var itemContainer = document.getElementById('ItemList')
    itemContainer.style.display = 'none'
    return ('Hidden')
}


fetch('/champions')
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            // Examine the text in the response
            response.json().then(function (data) {
                ReactDOM.render(
                    <App champions={data} />,
                    document.getElementById('root')
                );
            });
        }
    )
    .catch((err) => {
        console.log('Fetch error')
    })