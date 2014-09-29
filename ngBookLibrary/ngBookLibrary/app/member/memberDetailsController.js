(function () {
    'use strict';
    var controllerId = 'memberDetailsController';
    angular.module('app').controller(controllerId, ['common', 'datacontext', '$routeParams', memberDetailsController]);

    function memberDetailsController(common, datacontext, $routeParams) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.member = {};
        vm.title = 'Member Details';
        vm.getMember = getMember;

        activate();

        function activate() {
            var promises = [getMember($routeParams.id)];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Member Details View'); });
        }

        function getMember(id) {
            return datacontext.getMember(id).then(function (data) {
                return vm.member = data;
            });
        }
    }
})();