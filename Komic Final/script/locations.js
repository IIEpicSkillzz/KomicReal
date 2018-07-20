console.log("works")
function initMap() {
    var comicShops = [
        {lat: 34.083230, lng:-118.343475},
        {lat: 33.998959, lng:-118.430480},
        {lat: 34.011482, lng:-118.400766}
    ];
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat:34, lng: -118}
    });

    for(i=0; i<comicShops.length; i++){
        var marker = new google.maps.Marker({
            position: comicShops[i],
            map: map,
            title: 'Hello World!'
          });
    }

    
  }