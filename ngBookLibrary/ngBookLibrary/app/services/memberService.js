(function () {
    'use strict';

    var serviceId = 'memberService';
    angular.module('app').factory(serviceId, ['common', memberService]);

    function memberService(common) {
        var $q = common.$q;

        var service = {
            getMembers: getMembers,
            getMember: getMember
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