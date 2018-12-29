// Initialize Firebase
var config = {
  apiKey: "AIzaSyC4tpYua5m37ZN7WP0ALBlkbczAX2E4CH8",
  authDomain: "miprimerfirebase-dfda3.firebaseapp.com",
  databaseURL: "https://miprimerfirebase-dfda3.firebaseio.com",
  projectId: "miprimerfirebase-dfda3",
  storageBucket: "miprimerfirebase-dfda3.appspot.com",
  messagingSenderId: "643626888195"
};
firebase.initializeApp(config);

/*
  acceso al servicio de base de datos firebase
  crear varialbe baseDatos que contiene un firebase.database()
*/
var baseDatos = firebase.database();
var myLatLng;
var coordRuta = [];
/*
  escucha el boton y ejecuta la funcion al hacer click
*/

$('#rutasbtn').click(function () {

  /*
    limpiear el mapa
  */
  


  /*
    llama a las funciones de dibujo
  */
  drawMarkers();
});

