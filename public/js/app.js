$(document).ready(function() {
// Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDqeJqH3_aM_vSYtvj2n8c9XIl6CMrvpAw',
    authDomain: 'fare-estimate-4c274.firebaseapp.com',
    databaseURL: 'https://fare-estimate-4c274.firebaseio.com',
    projectId: 'fare-estimate-4c274',
    storageBucket: '',
    messagingSenderId: '1045327683760'
  };
  firebase.initializeApp(config);
  $('.register').on('click', function() {
    $('.box-register').show();
    $('.box-init').hide();
  });
  $('.login').on('click', function() {
    $('.box-register').hide();
    $('.box-init').show();
  });
});
