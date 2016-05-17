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
        ]);
    
})();
