
function sample1(){
    var gameHeader = document.getElementById("gameHeader");
    gameHeader.innerText = "Hello from index.js";
}

function getByClassNameDemo(){
    var containers = document.getElementsByClassName("container");

    for(var i = 0; i < containers.length; i++){
        console.log(`Element ${++i}`);
        consol.log(containers[i]);
    }
}

function getByClassGameDemo() {
    var games = document.getElementsByClassName("game");

    for(var i = 0; i < games.length; i++){
        console.log(`${i + 1} ${games[i].innerText}`)
    }
}

function getByClassAnimeDemo(){
    var animes = document.getElementsByClassName("anime");

    for(var i = 0; i < animes.length; i++){
        console.log(`${i + 1} ${animes[i].innerText}`)
    }
}

function modifyListItems(){
    var li = document.getElementsByTagName("li");

    for(var i = 0; i < li.length; i++){
        console.log(`${i + 1}`)
        console.log(li[i].attributes);
        li[i].classList.add("addingClasses");
        // li[i].innerText = `${li[i].innerText}!`;
    }
}

function addItem(anime){
    var animesList = document.getElementById("animesList")
    //("<li='naruto' class='anime'> Naruto </li>"
    var newAnime = document.createElement("li");
    var delBtn = document.createElement("button");
    delBtn.innerText = "Remove";
    newAnime.innerText=`${anime}`;
    newAnime.setAttribute("id",`${anime}`);
    newAnime.setAttribute("class","anime");
   
    animesList.appendChild(newAnime);
    animesList.appendChild(delBtn); 
    
}

function addAnime(){
    var animeInput = document.getElementById("animeInput")
    var animeValue = animeInput.value;
    
    var delBtn = document.createElement("button")
    delBtn.innerText = "Remove";
    addItem(animeValue);

    
    animeInput.value = null;
}

function removeAnime(anime){
    var animesList = document.getElementById("animesList")
    var anime = document.getElementById(`${anime}`)

    animesList.removeChild(`${anime}`);


}
function addGames(){}