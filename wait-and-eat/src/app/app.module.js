(function () {
    
    'use strict';
    
    angular
        .module("app", [
            //Angular modules
            'ngRoute',
        
            //third party modules
            'firebase',
        
            //custom modules
            'app.landing',
            'app.waitList',
            'app.auth',
            'app.core',
            'app.layout'
        ])
        .config(configFunction)
        .run(runFunction);
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
    
    runFunction.$inject = ['$rootScope', '$location'];
    
    function runFunction($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
            if (error === "AUTH_REQUIRED") {
                $location.path('/');
            }
        });
    }
    
})();
