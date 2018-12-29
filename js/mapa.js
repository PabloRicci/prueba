//inicializar instancia de objeto Mapa

var miMapa;

function initMapJS() {
  miMapa = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -33.59085,
      lng: -64.26813
    },
    zoom: 8,

  });

}