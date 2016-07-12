(function () {
    'use strict';

    angular
        .module('twHomework')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
