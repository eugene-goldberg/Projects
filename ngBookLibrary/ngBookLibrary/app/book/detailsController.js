(function () {
    'use strict';
    var controllerId = 'detailsController';
    angular.module('app').controller(controllerId, ['common', 'datacontext' ,'$routeParams', detailsController]);

    function detailsController(common, datacontext, $routeParams) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.book = {};
        vm.title = 'Book Details';
        vm.getBook = getBook;

        activate();

        function activate() {
            var promises = [getBook($routeParams.id)];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Book View'); });
        }

        function getBook(id) {
            return datacontext.getBook(id).then(function (data) {
                return vm.book = data;
            });
        }
    }
})();