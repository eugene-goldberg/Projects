(function () {
    'use strict';
    var controllerId = 'memberListController';
    angular.module('app').controller(controllerId, ['common', 'datacontext', memberListController]);

    function memberListController(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Members';
        vm.members = [];
        vm.sortProperty = 'title';
        vm.sort = sortData;

        activate();

        function activate() {
            var promises = [getMembers(), sortData(vm.sortProperty)];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Members List View'); });
        }

        function getMembers() {
            return datacontext.getMembers().then(function (data) {
                return vm.members = data;
            });
        }


        function sortData(propertyName) {
            vm.sortProperty = propertyName;
        }
    }
})();