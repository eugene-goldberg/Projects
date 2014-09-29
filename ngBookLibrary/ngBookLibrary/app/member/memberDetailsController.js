(function () {
    'use strict';
    var controllerId = 'memberDetailsController';
    angular.module('app').controller(controllerId, ['common', 'memberService', '$routeParams', memberDetailsController]);

    function memberDetailsController(common, memberService, $routeParams) {
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
            return memberService.getMember(id).then(function (data) {
                return vm.member = data;
            });
        }
    }
})();