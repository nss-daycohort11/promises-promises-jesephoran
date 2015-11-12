requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min', 
    'q': "../lib/bower_components/q/q"
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

requirejs(
  ["q", "jquery", "hbs", "bootstrap", "get-books", "get-book-types", "main"], 
  function(Q, $, Handlebars, bootstrap, getBooks, getBookTypes, main) {

    // books.load(function(bookArray) {
    //   require(['hbs!../templates/books'], function(bookTpl) {
    //     $("#bookList").html(bookTpl({ books:bookArray }));
    //   });
    // });

  // getBookTypes()
  //   .then(function(types) {
  //     getBooks(types);
  //   })
  //   .then(function(books) {

  //   })

    /* Here's some pseudo-code for how it should look once you
       start using promises

    getBookTypes()
      .then(function(types) {
        getBooks(types);
      })
      .then(function(books) {
        // add the type key to each book that is currently
        // being performed in the get-books file

        // then bind the template to the data 
        // (p.s. make the handlebar template a module dependency)
        require(['hbs!../templates/books'], function(bookTpl) {
          $("#bookList").html(bookTpl({ books:bookArray }));
        });

      })
     */

  }
);
