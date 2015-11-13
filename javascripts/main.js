define(function(require) {
  var _ = require("lodash");
  var Q = require("q");
  var getBooks = require("get-books");
  var getBookTypes = require("get-book-types");
  
  var genreNames;
  var librarySorting = getBookTypes();

librarySorting
    .then(function(allTypes) {
      genreNames = allTypes; // assigns allTypes object to a module-level variable
      console.log("allTypes", allTypes);
      return getBooks.retrieveLibrary();
    })
    .then(function(books) {

      genreNames = Object.keys(genreNames).map(key => genreNames[key]); 
      books = Object.keys(books).map(key => books[key]); 
      console.log("books", books);  

      // applies genre name to each book object
      var updatedBooks = books.map(book => {
        book.type = _.find(genreNames, {id:book.booktype}).label; //study this line of code more
        return book;
      });

      var objectToSendToHandlebars = {books:updatedBooks};
      require(['hbs!../templates/books'], function(bookTpl) {
        $("#bookList").html(bookTpl(objectToSendToHandlebars));
      });



          
    })
    .fail(function(error) {
      console.log("error", error)
    })



















});