// if('serviceWorker' in navigator){
// navigator.serviceWorker.register('sw.js')
// .then((reg) => console.log('service worker registered', reg))
// .catch((err) => console.log('service worker not registered', err));
// }


if ('serviceWorker' in navigator) {
 window.addEventListener('load', function() {
   navigator.serviceWorker.register('sw.js').then(function(registration) {
      Registration was successful
    .then((ref) => console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      registration failed :(
    .catch((err)) => console.log('ServiceWorker registration failed: ', err);
    });
  });
}
navigator.serviceWorker.register('/sw.js', {
  scope: '/'
});


//if('serviceWorker' in navigator) {
//  console.log('CLIENT: service worker registration in progress.');
//  navigator.serviceWorker.register('/sw.js').then(function() {
//    console.log('CLIENT: service worker registration complete.');
//  }, function() {
//    console.log('CLIENT: service worker registration failure.');
//  });
//} else {
//  console.log('CLIENT: service worker is not supported.');
//}


console.log('Hello from service-worker.js');
