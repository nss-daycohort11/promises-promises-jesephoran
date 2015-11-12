define(function(require) {
  var _ = require("lodash");
  var Q = require("q");
  var getBooks = require("get-books");
  var getBookTypes = require("get-book-types");
  
  getBooks()
    .then(function(books) {
      return getBookTypes(books);
      console.log("books", books);
    })
    .then(function(types) {
      return getBookTypes(types);
    })
    .fail(function(error) {
      console.log("error", error);
    })

});


















//     getBooks = function(fn) {
      

//           console.log("books", books);
//           books = Object.keys( books ).map(key => books[ key ]);

//           var books = books.map(book => {
//             book.type = _.find(types, { id:book.booktype }).label;
//             return book;
//           });

//           fn(books);

//       });

//     }
//   // };

// getBooks();

