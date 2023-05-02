const jp = require('jsonpath');

const books = {
  store: {
    book: [
      {
        category: 'fiction',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 9.99,
      },
      {
        category: 'fiction',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 8.99,
      },
      {
        category: 'nonfiction',
        title: 'The Elements of Style',
        author: 'William Strunk Jr.',
        price: 4.99,
      },
      {
        category: 'nonfiction',
        title: 'The Design of Everyday Things',
        author: 'Don Norman',
        price: 12.99,
      },
    ],
    bicycle: {
      color: 'red',
      price: 19.95,
    },
  },
};

const names = jp.query(books, '$.store.book[?(@.price>10)].title');

console.log(names);
