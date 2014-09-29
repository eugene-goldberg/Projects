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
            getBook: getBook,
            getMembers: getMembers,
            getMember: getMember
        };

        var books = [
                { id: 1, title: 'Programming Fundamentals', author: 'Scott Hanselman', price: 700, isAvailable: true },
                { id: 2, title: 'Building Web Apps using AngularKS', author: 'Dan Wahlin', price: 1200, isAvailable: false },
                { id: 3, title: 'Let Us C', author: 'Yashwant Kanetkar', price: 500, isAvailable: false },
                { id: 4, title: 'Mastering SQL', author: 'Rob Dan', price: 5000, isAvailable: true },
        ];

        var people = [
                { id: 1, firstName: 'John', lastName: 'Papa', dob: '1980-09-15' },
                { id: 2, firstName: 'Ward', lastName: 'Bell', dob: '1980-09-15' },
                { id: 3, firstName: 'Colleen', lastName: 'Jones', dob: '1980-09-15' },
                { id: 4, firstName: 'Madelyn', lastName: 'Green', dob: '1980-09-15' },
                { id: 5, firstName: 'Ella', lastName: 'Jobs', dob: '1980-09-15' },
                { id: 6, firstName: 'Landon', lastName: 'Gates', dob: '1980-09-15' },
                { id: 7, firstName: 'Haley', lastName: 'Guthrie', dob: '1980-09-15' }
        ];

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
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

        function getMembers() {
            return $q.when(people);
        }

        function getMember(id) {
            var m = {};
            for (var i = 0; i < people.length; i++) {
                if (people[i].id === parseInt(id, 10)) {
                    m = people[i];
                    break;
                }
            }
            return $q.when(m);
        }
    }
})();