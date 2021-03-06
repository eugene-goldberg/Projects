(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', datacontext]);

    function datacontext(common) {
        var $q = common.$q;

        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount
        };

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
    }
})();