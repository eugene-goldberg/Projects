(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', datacontext]);

    function datacontext(common) {
        var $q = common.$q;

        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount,
            getBooks: getBooks,
            getBook: getBook
        };

        var books = [
                { id: 1, title: 'Programming Fundamentals', author: 'Scott Hanselman', price: 700, isAvailable: true },
                { id: 2, title: 'Building Web Apps using AngularKS', author: 'Dan Wahlin', price: 1200, isAvailable: false },
                { id: 3, title: 'Let Us C', author: 'Yashwant Kanetkar', price: 500, isAvailable: false },
                { id: 4, title: 'Mastering SQL', author: 'Rob Dan', price: 5000, isAvailable: true },
        ];

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            var people = [
                { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
                { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
                { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
                { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
                { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
                { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
                { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
            ];
            return $q.when(people);
        }

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