angular.module('three', ['ParseServices', 'ExternalDataServices'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider

  .state('demo.three', {
    abstract: true,
      templateUrl: 'app/views/app-layout.html'
    })
    .state('demo.three.sphere', {
      url: '/three',
      views: {
        'detail@demo' : {
          templateUrl: 'app/views/sphere.html',
          controller: 'ThreeSphereController'
        }

      }
    })
  

}])