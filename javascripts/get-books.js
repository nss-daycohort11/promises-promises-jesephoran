define(function(require) {
  var _ = require("lodash");
  var Q = require("q");

  return function() {
    var deferred = Q.defer();
    
    $.ajax({
      url: "https://nss-book-store.firebaseio.com/books.json"
    })
    .done(function(books) {
      deferred.resolve(books);
    })
    .fail(function(error) {
      deferred.reject(error); 
    });
    return deferred.promise;
  };
});



    


