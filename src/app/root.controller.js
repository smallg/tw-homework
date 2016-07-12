/**
 * Created by Samllg on 2016/7/12.
 */
(function () {
    'use strict';

    angular
        .module('twHomework')
        .controller('RootController', RootController);

    /** @ngInject */
    function RootController() {
        var vm = this;

        vm.test = 'testsfsf';
    }
})();
