
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



$('#myCarousel').carousel({
  interval: 4000
})


var grid = new Muuri('.grid');
;
var grid = new Muuri(elem, {
  layout: {
    fillGaps: true,
    horizontal: true,
    alignRight: true,
    alignBottom: true,
    rounding: false
  }
});
var grid = new Muuri('.grid', {
  dragEnabled: true
})

//
// // Use specific items.
// var grid = new Muuri(elem, {
//   items: [elemA, elemB, elemC]
// });
//
// // Use node list.
// var grid = new Muuri(elem, {
//   items: elem.querySelectorAll('.item')
// });
//
// // Use selector.
// var grid = new Muuri(elem, {
//   items: '.item'
// });


//
// // Build your own layout algorithm.
// var grid = new Muuri(elem, {
//   layout: function (items, gridWidth, gridHeight) {
//     // The layout data object. Muuri will read this data and position the items
//     // based on it.
//     var layout = {
//       // The layout's item slots (left/top coordinates).
//       slots: [],
//       // The layout's total width.
//       width: 0,
//       // The layout's total height.
//       height: 0,
//       // Should Muuri set the grid's width after layout?
//       setWidth: true,
//       // Should Muuri set the grid's height after layout?
//       setHeight: true
//     };
//
//     // Calculate the slots.
//     var item;
//     var m;
//     var x = 0;
//     var y = 0;
//     var w = 0;
//     var h = 0;
//     for (var i = 0; i < items.length; i++) {
//       item = items[i];
//       x += w;
//       y += h;
//       m = item.getMargin();
//       w = item.getWidth() + m.left + m.right;
//       h = item.getHeight() + m.top + m.bottom;
//       layout.slots.push(x, y);
//     }
//
//     // Calculate the layout's total width and height.
//     layout.width = x + w;
//     layout.height = y + h;
//
//     return layout;
//   }
// });

function myFunction() {
  alert("Click on the buttons to load the pages");
}
