
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/sw.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }

console.log('Hello from service-worker.js');


function myFunction() {
  alert("Welcome to Keele Creative Writing Society! Click on the button to go to page 2 where you will find symbols to navigate the website! ");
}


$('.myLinkToTop').click(function () {
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
    return false;
});

$('.myMenuLink').click(function () {
    $('html, body').animate({scrollTop:0}, 'slow');
    return false;
});
