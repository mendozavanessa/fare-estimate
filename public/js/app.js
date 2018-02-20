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

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.uber.com/v1.2/products?latitude=37.7759792&longitude=-122.41823');
  xhr.setRequestHeader('Authorization', 'FXxrk_qIXvnWx5oKah7QxHeM5zp_D_doiYA9nf2E');
  xhr.send();

});