/*dibujar puntos de ruta actual*/

const drawMarkers=() => {

  var referencia = baseDatos.ref('rutas');
  referencia.once('value', function (listaDatos) {
    /*bucle por toda la lista*/
    listaDatos.forEach(function (childSnapshot) {
      var nombre = childSnapshot.val().nombre;
      var tarea = childSnapshot.val().tarea;
      var latitud = childSnapshot.val().latitud;
      var longitud = childSnapshot.val().longitud;
      var altura = childSnapshot.val().altura;
      myLatLng = {
        lat: childSnapshot.val().latitud,
        lng: childSnapshot.val().longitud
      };
      coordRuta.push({
        lat: childSnapshot.val().latitud,
        lng: childSnapshot.val().longitud
      });

      var marker = new google.maps.Marker({
        position: myLatLng,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 3
        }
      });
      marker.setMap(miMapa);
      miMapa.setCenter(myLatLng);
      miMapa.setZoom(18);
    });
  })
  drawPath();
}

/*dibujar ruta actual*/

const drawPath=()=> {
  var trayectoria = new google.maps.Polyline({
    path: coordRuta,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  /*Seteando la ruta en el mapa miMapa*/
  trayectoria.setMap(miMapa);
}
