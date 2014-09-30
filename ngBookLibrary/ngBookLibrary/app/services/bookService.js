(function () {
    'use strict';

    var serviceId = 'bookService';
    angular.module('app').factory(serviceId, ['common','$http', bookService]);

    function bookService(common, $http) {
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
            var request = $http({
                method: "get",
                url: "http://localhost:7357/api/book",
                params: {
                    action: "get"
                }
            });

            return (request.then(handleSuccess, handleError));
        }
        
        function handleSuccess(response) {

            return (response.data);

        }
        function handleError(response) {

            // The API response from the server should be returned in a
            // nomralized format. However, if the request was not handled by the
            // server (or what not handles properly - ex. server error), then we
            // may have to normalize it on our end, as best we can.
            if (
                !angular.isObject(response.data) ||
                !response.data.message
                ) {

                return ($q.reject("An unknown error occurred."));

            }

            // Otherwise, use expected error message.
            return ($q.reject(response.data.message));

        }
        
        
        //function getBook(id) {
        //    var b = {};
        //    for (var i = 0; i < books.length; i++) {
        //        if (books[i].id === parseInt(id, 10)) {
        //            b = books[i];
        //            break;
        //        }
        //    }
        //    return $q.when(b);
        //}

        function getBook(id) {
            var request = $http({
                method: "get",
                url: "http://localhost:7357/api/book/" + id,
                params: {
                    action: "get"
                }
            });

            return (request.then(handleSuccess, handleError));
        }
    }
})();