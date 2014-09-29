(function () {
    'use strict';

    var serviceId = 'bookService';
    angular.module('app').factory(serviceId, ['common', bookService]);

    function bookService(common) {
        var $q = common.$q;

        var service = {
            getBooks: getBooks,
            getBook: getBook
        };

        var books = [
                { id: 1, title: 'Programming Fundamentals', author: 'Scott Hanselman', price: 700, isAvailable: true },
                { id: 2, title: 'Building Web Apps using AngularJS', author: 'Dan Wahlin', price: 1200, isAvailable: false },
                { id: 3, title: 'Let Us C', author: 'Yashwant Kanetkar', price: 500, isAvailable: false },
                { id: 4, title: 'Mastering SQL', author: 'Rob Dan', price: 5000, isAvailable: true }
        ];

        return service;

        function getBooks() {
            return $q.when(books);
        }

        function getBook(id) {
            var b = {};
            for (var i = 0; i < books.length; i++) {
                if (books[i].id === parseInt(id, 10)) {
                    b = books[i];
                    break;
                }
            }
            return $q.when(b);
        }
    }
})();