 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAkd_ISvTPPUTC0aOs5qnNz-JAjUZckigc",
    authDomain: "my-project-39319.firebaseapp.com",
    databaseURL: "https://my-project-39319.firebaseio.com",
    projectId: "my-project-39319",
    storageBucket: "my-project-39319.appspot.com",
    messagingSenderId: "890433261471"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var name = "";
  var role = "";
  var sDate = "";
  var time = "";
  var pRate = "";
  var pTotal = "";

  database.ref().set({
      name:name,
      role:role,
      sDate:sDate,
      pRate:pRate
  });

  $(".btn").on("click", function(event){
      
  })