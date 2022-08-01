const { addBookHandler, getAllBooksHandler, getBookByHandler, editBookByIdHandler } = require("./handler");

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
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler
  }
]


module.exports = routes;