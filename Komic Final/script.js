var comics = [
  {hero:"superman", comicName: "The Death of Superman"},
  {hero:"superman", comicName: "The Trial of Superman"},
  {hero:"superman", comicName: "Reign of Doomsday"},
  {hero:"batman", comicName: "Beyond"}
];

localStorage = window.localStorage;

var searchResults = [];


var comicInput = document.getElementById("comicInput");
var submitSearch = document.getElementById("submitSearch");

submitSearch.onclick = function(){
  console.log(comicInput.value);

  for(i=0; i < comics.length; i++){
    if(comicInput.value == comics[i].hero){
      searchResults.push(comics[i]);
    }
    console.log(searchResults);
  }

  localStorage.setItem("comicResults",JSON.stringify(searchResults));
  console.log(localStorage.getItem("comicResults")[0]);

  searchResults = [];

  location.href="./results.html"

}

