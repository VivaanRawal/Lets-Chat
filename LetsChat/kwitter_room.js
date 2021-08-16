var firebaseConfig = {
      apiKey: "AIzaSyB9HRTTrzn6Sejxf2b7rY7TmGPi4lxS4eE",
      authDomain: "city-y9dn.firebaseapp.com",
      databaseURL: "https://city-y9dn-default-rtdb.firebaseio.com",
      projectId: "city-y9dn",
      storageBucket: "city-y9dn.appspot.com",
      messagingSenderId: "447247762724",
      appId: "1:447247762724:web:0f9dd086251aaf1dde1fb1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
