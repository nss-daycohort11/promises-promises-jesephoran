define(function(require) {
  var _ = require("lodash");
  var Q = require("q");
  var getBooks = require("get-books");
  var getBookTypes = require("get-book-types");
  
  var globalVariable;
console.log("You've loaded main.js");


getBookTypes()
    .then(function(types) {
      globalVariable = types;
      console.log("typesget", globalVariable);
      return getBooks.load();
    })
    .then(function(books) {

      globalVariable = Object.keys( globalVariable ).map(key => globalVariable[ key ]);
        books = Object.keys( books ).map(key => books[ key ]);
        console.log("globalVariable222", globalVariable);

        books = books.map(book => {
          book.type = _.find(globalVariable, { id:book.booktype }).label;
          console.log("books", books);

          
        require(['hbs!../templates/books'], function(bookTpl) {
          $("#bookList").html(bookTpl({ books:books }));
        });
          return books;
        });
    })
    .fail(function(error) {
      console.log("error", error)
    })

});


