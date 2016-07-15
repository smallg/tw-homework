(function () {
    'use strict';

    angular
        .module('twHomework')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, webDevTec, toastr) {
        var vm = this;

        vm.activeTabName = 'agents';
        vm.setActiveTab = function (e) {
            if (angular.isDefined(e)) {
                vm.activeTabName = e.currentTarget.innerHTML;
            }

        };

        vm.result = [
            {
                address: "bjstdmngbgr02.thoughtworks.com",
                type: "idle",
                ipAddress: "192.168.1.3",
                localAddress: "/var/lib/cruise-agent",
                resources: [{name: "ubuntu"}, {name: "firefox3"}, {name: "core-duo"}]
            },
            {
                address: "bjstdmngbgr03.thoughtworks.com",
                type: "building",
                ipAddress: "192.168.1.3",
                localAddress: "/var/lib/cruise-agent",
                resources: [{name: "ubuntu"}, {name: "firefox3"}, {name: "mysql"}, {name: "core-duo"}]
            },
            {
                address: "bjstdmngbgr04.thoughtworks.com",
                type: "building",
                ipAddress: "192.168.1.4",
                localAddress: "/var/lib/cruise-agent",
                resources: [{name: "ubuntu"}, {name: "firefox3"}, {name: "core-duo"}]
            },
            {
                address: "bjstdmngbgr05.thoughtworks.com",
                type: "idle",
                ipAddress: "192.168.1.5",
                localAddress: "/var/lib/cruise-agent",
                resources: [{name: "ubuntu"}]
            }
        ];
    }
})();
