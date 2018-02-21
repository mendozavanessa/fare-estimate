var config = {
  apiKey: "AIzaSyCnvceLHFJR5Q5Y_G89_bc_dJH-q0Hx8bs",
  authDomain: "fare-estimate-tv.firebaseapp.com",
  databaseURL: "https://fare-estimate-tv.firebaseio.com",
  projectId: "fare-estimate-tv",
  storageBucket: "",
  messagingSenderId: "25625867728"
};
firebase.initializeApp(config);
var userName = $('#nameUser');
$('#btn-google').on('click', function() {
  if (!firebase.auth().currentUser) {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      localStorage.userName = user;
      // ...
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var erroremail = error.email;
      var credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Es el mismo usuario');
      }
    });
  } else {
    firebase.auth().signOut();
  }
});

function InicializarFire() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      alert(user);
      userName.textContent = user.displayName;
    }
  });
}
window.onload = function() {
  InicializarFire();
};

$('.register').on('click', function() {
  $('.box-register').show();
  $('.box-init').hide();
});
$('.login').on('click', function() {
  $('.box-register').hide();
  $('.box-init').show();
});