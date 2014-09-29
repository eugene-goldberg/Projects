(function () {
    'use strict';
    var controllerId = 'bookController';
    angular.module('app').controller(controllerId, ['common', bookController]);

    function bookController(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Book';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Book View'); });
        }
    }
})();