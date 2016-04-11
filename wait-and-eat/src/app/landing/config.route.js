(function () {
    'use strict';
    
    angular
        .module("app.landing")
        .config(configFunction);
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProveider) {
        $routeProveider.when('/', {
            templateUrl: 'app/landing/landing.html',
        });
    }
})();