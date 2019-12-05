// if('serviceWorker' in navigator){
// navigator.serviceWorker.register('sw.js')
// .then((reg) => console.log('service worker registered', reg))
// .catch((err) => console.log('service worker not registered', err));
// }


// if ('serviceWorker' in navigator) {
//  window.addEventListener('load', function() {
//    navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
//     //.then((ref) =>
//     console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//     //.catch((err)) =>
//     console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }
// else {
//   navigator.serviceWorker.register('/js/sw.js');
//   console.log('First time registration.');
// }
//
// //if('serviceWorker' in navigator) {
//  console.log('CLIENT: service worker registration in progress.');
//  navigator.serviceWorker.register('/sw.js').then(function() {
//    console.log('CLIENT: service worker registration complete.');
//  }, function() {
//    console.log('CLIENT: service worker registration failure.');
//  });
//} else {
//  console.log('CLIENT: service worker is not supported.');
//}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

console.log('Hello from service-worker.js');


<meta name="google-signin-client_id" content="90282911210-qmmf4muu6de08ogh5tn0qrm3e0jj78an.apps.googleusercontent.com">

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
<a href="#" onclick="signOut();">Sign out</a>
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
