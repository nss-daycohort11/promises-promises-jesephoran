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


