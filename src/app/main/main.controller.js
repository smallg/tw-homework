/**
 * Created smallg dev on 2016/7/17.
 */
(function () {
    'use strict';

    angular
        .module('twHomework')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, underscore, toastr) {
        var vm = this;

        vm.tpl = 'custom-popover.html';
        vm.activeTabName = 'agents';
        vm.isOpen = false;
        vm.filterList = ['All', 'Physical', 'Virtual'];
        vm.radioModel = 'All';
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

        vm.historyList = [
            {content: 'bjsdmngbgr02/Acceptance_test'},
            {content: 'bjsdmngbgr02/Acceptance_test'},
            {content: 'bjsdmngbgr02/Acceptance_test'},
            {content: 'bjsdmngbgr02/Acceptance_test'},
            {content: 'bjsdmngbgr02/Acceptance_test'},
            {content: 'bjsdmngbgr02/Acceptance_test'},
            {content: 'bjsdmngbgr02/Acceptance_test'},
            {content: 'bjsdmngbgr02/Acceptance_test'},
            {content: 'bjsdmngbgr02/Acceptance_test'},
            {content: 'bjsdmngbgr02/Acceptance_test'}
        ];

        var summaryTemp = underscore.groupBy(vm.result, 'type');
        vm.summaryList = [];
        angular.forEach(summaryTemp, function (v, k) {
            vm.summaryList.push({key: k, total: v.length});
        });

        vm.delResource = function (currentList, currentResource) {
            angular.forEach(vm.result, function (v, k) {
                var index = v.resources.indexOf(currentResource);
                if (v.address === currentList.address && index > -1) {
                    delete vm.result[k].resources.splice(index, 1);
                }
            });
        };

        vm.addRes = function (currentRecord) {
            if (vm.addResources.length > 0) {
                if (vm.addResources.indexOf(',') > -1) {
                    var temp_res = vm.addResources.split(',');
                    angular.forEach(vm.result, function (v, k) {
                        if (v.address === currentRecord.address) {
                            angular.forEach(temp_res, function (vv) {
                                if (underscore.where(vm.result[k].resources, {name: vv}).length <= 0) {
                                    vm.result[k].resources.push({name: vv});
                                    currentRecord.isOpen = false;
                                } else {
                                    toastr.warning("Resources " + vv + " exist!");
                                }
                            });
                        }
                    });
                } else {
                    angular.forEach(vm.result, function (v, k) {
                        if (v.address === currentRecord.address) {
                            if (underscore.where(vm.result[k].resources, {name: vm.addResources}).length <= 0) {
                                vm.result[k].resources.push({name: vm.addResources});
                                currentRecord.isOpen = false;
                            } else {
                                toastr.warning("Resources " + vm.addResources + " exist!");
                            }
                        }
                    });
                }
            }
        };

        vm.closePopover = function (r) {
            r.isOpen = false;
        };

        vm.resetInput = function () {
            vm.addResources = null;
        };

        vm.filter = function (n) {
            if (n === 'All') {
                vm.filterResult = vm.result;
            } else if (n === 'Physical') {
                vm.filterResult = underscore.filter(vm.result, function (v) {
                    return v.type === 'idle';

                });
            } else if (n === 'Virtual') {
                vm.filterResult = underscore.filter(vm.result, function (v) {
                    return v.type === 'building';
                });
            }
        };
        vm.filter('All');
    }
})();
