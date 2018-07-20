var comics = [
  {hero:"Superman", comicName: "The Death of Superman", imgUrl:"https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/359464/359464._SX360_QL80_TTD_.jpg"},
  {hero:"Superman", comicName: "The Trial of Superman", imgUrl:"https://static.comicvine.com/uploads/scale_large/0/4/73792-3816-70811-1-superman.jpg"},
  {hero:"Superman", comicName: "Reign of Doomsday", imgUrl:"https://i.pinimg.com/originals/94/38/32/943832e4ee1ffed90996d068a37dddf1.jpg"},
  {hero:"Batman", comicName: "Beyond", imgUrl:"http://neoncinemas.com/wp-content/uploads/2016/10/Batman-Beyond-1-DC-Comics-Rebirth-spoilers-1.jpg"},
  {hero:"Superman", comicName: "s1", imgUrl:"../images/covers/s1.jpg"},
  {hero:"Superman", comicName: "s2", imgUrl:"../images/covers/s2.jpeg"},
  {hero:"Superman", comicName: "s3", imgUrl:"../images/covers/s3.jpg"},
  {hero:"Superman", comicName: "s4", imgUrl:"../images/covers/s4.jpg"},
  {hero:"Superman", comicName: "s5", imgUrl:"../images/covers/s5.jpg"},
  {hero:"Batman", comicName: "b1", imgUrl:"../images/covers/b1.jpg"},
  {hero:"Batman", comicName: "b2", imgUrl:"../images/covers/b2.jpeg"},
  {hero:"Batman", comicName: "b3", imgUrl:"../images/covers/b3.jpg"},
  {hero:"Batman", comicName: "b4", imgUrl:"../images/covers/b4.jpeg"},
  {hero:"Batman", comicName: "b5", imgUrl:"../images/covers/b5.jpg"},
  {hero:"Batman", comicName: "b6", imgUrl:"../images/covers/b6.jpg"},
  {hero:"Batman", comicName: "b7", imgUrl:"../images/covers/b7.jpg"},
  {hero:"Spiderman", comicName: "p1", imgUrl:"../images/covers/p1.jpg"},
  {hero:"Spiderman", comicName: "p2", imgUrl:"../images/covers/p2.jpg"},
  {hero:"Spiderman", comicName: "p3", imgUrl:"../images/covers/p3.png"},
  {hero:"Spiderman", comicName: "p4", imgUrl:"../images/covers/p4.png"},
  {hero:"Spiderman", comicName: "p5", imgUrl:"../images/covers/p5.jpg"},
  {hero:"Spiderman", comicName: "p6", imgUrl:"../images/covers/p6.jpg"},
  {hero:"Spiderman", comicName: "p7", imgUrl:"../images/covers/p7.jpeg"},
  {hero:"Spiderman", comicName: "p8", imgUrl:"../images/covers/p8.jpeg"}
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

  location.href="./templates/results.html"

}

