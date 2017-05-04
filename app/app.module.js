(function(){
    angular.module('rnd',['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
    
            $urlRouterProvider.otherwise('/home');
            
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'app/home.html',
                    controller: 'homeCtrl',
                    controllerAs: 'home'
                })
                .state('about', {
                    // we'll get to this in a bit       
                });
        })
})();