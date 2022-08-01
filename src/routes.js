const { addBookHandler, getAllBooksHandler, getBookByHandler } = require("./handler");

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  }, 
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByHandler
  }
]


module.exports = routes;