$('#resultsName').append("<h1>Results For: "+comicResults[0].hero+"</h1>");

for(i=0; i<comicResults.length; i++){
    $('#comicResults').append("<p>"+comicResults[i].comicName+"</p>")
}