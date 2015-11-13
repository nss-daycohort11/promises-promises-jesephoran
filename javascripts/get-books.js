define(function(require) {
  var $ = require("jquery")
  var _ = require("lodash");
  var Q = require("q");
  // var BookTypes = require("get-book-types");

return{
    retrieveLibrary: function() {
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
    }
  };
});



    


