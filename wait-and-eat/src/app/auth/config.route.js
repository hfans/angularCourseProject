(function () {
    'use strict';
    
    angular
        .module("app.auth")
        .config(configFunction);
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProveider) {
        $routeProveider.when('/register', {
            templateUrl: 'app/auth/register.html',
            controller: "AuthController",
            controllerAs: 'vm'
        });
    }
})();