define(function(require) {
  var _ = require("lodash");
  var Q = require("q");
  var getBooks = require("get-books");
  var getBookTypes = require("get-book-types");
  
  var globalVariable;
console.log("You've loaded main.js");
  var bookLibrary = {};
  var compiledLibrary = getBookTypes();

compiledLibrary
    .then(function(types) {
      globalVariable = types;
      return getBooks.load();
    })
    .then(function(books) {

      globalVariable = Object.keys( globalVariable ).map(key => globalVariable[ key ]);
        books = Object.keys( books ).map(key => books[ key ]);

        var updatedBooks = books.map(book => {
          book.type = _.find(globalVariable, { id:book.booktype }).label;
          return book;
        });

        console.log("updatedBooks",updatedBooks);


        var objectToSendToHandlebars = {books:updatedBooks};
        require(['hbs!../templates/books'], function(bookTpl) {
          $("#bookList").html(bookTpl(objectToSendToHandlebars));
        });



          
    })
    .fail(function(error) {
      console.log("error", error)
    })



















});