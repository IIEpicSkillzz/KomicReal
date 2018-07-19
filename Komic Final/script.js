var comics = [
  {hero:"Superman", comicName: "The Death of Superman", imgUrl:"https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/359464/359464._SX360_QL80_TTD_.jpg"},
  {hero:"Superman", comicName: "The Trial of Superman", imgUrl:"https://static.comicvine.com/uploads/scale_large/0/4/73792-3816-70811-1-superman.jpg"},
  {hero:"Superman", comicName: "Reign of Doomsday", imgUrl:"https://i.pinimg.com/originals/94/38/32/943832e4ee1ffed90996d068a37dddf1.jpg"},
  {hero:"Batman", comicName: "Beyond", imgUrl:"http://neoncinemas.com/wp-content/uploads/2016/10/Batman-Beyond-1-DC-Comics-Rebirth-spoilers-1.jpg"}
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

