(function () {
    'use strict';
    var controllerId = 'bookController';
    angular.module('app').controller(controllerId, ['common', 'bookService', bookController]);

    function bookController(common, bookService) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Book';
        vm.books = [];
        vm.sortProperty = 'title';
        vm.sort = sortData;

        activate();

        function activate() {
            var promises = [getBooks(), sortData(vm.sortProperty)];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Book View'); });
        }

        function getBooks() {
            return bookService.getBooks().then(function (data) {
                return vm.books = data;
            });
        }


        function sortData(propertyName) {
            vm.sortProperty = propertyName;
        }
    }
})();