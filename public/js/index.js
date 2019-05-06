function search() {
    var a, items, TextValue;
    var userInput = document.getElementById('userInput');
    var filter = userInput.value.toUpperCase();
    var ul = document.getElementById("ChampionList");
    var li = ul.getElementsByTagName('li');

    for (items = 0; items < li.length; items++) {
        a = li[items].getElementsByTagName("a")[0];
        TextValue = a.textContent || a.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            li[items].style.display = "";
        } 
        else {
            li[items].style.display = "none";
        }
    }
    ShowChampionContainer()
}

function ShowChampionContainer(){
    console.log('showing')
    var SearchContainer = document.getElementById('CalcSearch')
    var championContainer = document.getElementById('ChampionList')
    championContainer.style.display='inline'
    SearchContainer.style.display='inline'
}

function HideChampionContainer(){
    console.log('hiding')
    var SearchContainer = document.getElementById('CalcSearch')
    var championContainer = document.getElementById('ChampionList')
    
    championContainer.style.display='none'
    SearchContainer.style.display='none'

}

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
                ReactDOM.render(
                    (
                        <div>
                            <App champions={data} />
                        </div>
                    ),
                    document.getElementById('root')
                  );
            });
        }
    )
    .catch((err)=>{
        console.log('Fetch error')
    })