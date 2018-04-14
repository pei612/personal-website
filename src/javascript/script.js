var locations = {
  tokyo: {
    coord: {lat: 35.652832, lng: 139.839478},
    name: 'Tokyo'
  },
  shanghai: {
    coord: {lat: 31.267401, lng: 121.522179},
    name: 'Shanghai'
  },
  beijing: {
    coord: {lat: 39.9075, lng: 116.39723},
    name: 'Beijing'
  },
  newyork: {
    coord: {lat: 40.7128, lng: -74.0060},
    name: 'New York'
  },
  italy: {
    coord: {lat: 41.8719, lng: -12.5674},
  }
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('my-map'), {
    zoom: 2,
    center: locations.italy.coord
  });
  
  var markers = [
    createMarker(locations.tokyo, map),
    createMarker(locations.shanghai, map),
    createMarker(locations.beijing, map),
    createMarker(locations.newyork, map),
  ];
}

function createMarker(location, map) {
  var marker = new google.maps.Marker({
    map: map,
    position: location.coord,
    title: location.title
  });
  
  var infowindow = new google.maps.InfoWindow({
    content: '<div class="bold">' + location.name + '</div>'
  });
  
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  
  return marker;
}