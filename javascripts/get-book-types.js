define(function(require) {
  var _ = require("lodash");
  var Q = require("q");

  return function() {
    var deferred = Q.defer();
    
    $.ajax({
      url: "https://nss-book-store.firebaseio.com/booktypes.json"
    })
    .done(function(types) {
      deferred.resolve(types);
    })
    .fail(function(error) {
      deferred.reject(error); 
    });
    return deferred.promise;
  };
});



// define(function(require) {
//   var _ = require("lodash");

//   return {
//     getBookTypes: function(fn) {

//       $.ajax("https://nss-book-store.firebaseio.com/booktypes.json").done(function(types) {

//           types = Object.keys( types ).map(key => types[ key ]);

//           var types = types.map(book => {
//             book.type = _.find(types, { id:book.booktype }).label;
//             return book;
//           });

//           fn(types);

//       });

//     }
//   };


// });