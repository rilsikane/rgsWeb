var myApp = angular.module('myApp', ['ui.router']);
myApp.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
)
myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'home.html',
            controller: 'MainCtrl'
        })
        .state('single-service_1', {
            url:'/single-service_1',
            templateUrl: 'single-service_1.html',
            controller: function ($scope) {
              $scope.pictures = [
                 {src: '_content/services/finance.jpg' },
                 {src: '_content/services/slider/555x360-2.jpg' },
                 {src: '_content/services/slider/555x360-3.jpg' }
               ];
            }
        })
        .state('jobsPosition-list',{
            url:'/job-position-list/:page',
            templateUrl:'all-job-position-list.html',
            controller: 'JobPositionCtrl'
        })
        .state('jobsPosition-grid',{
            url:'/job-position-grid/:page',
            templateUrl:'all-job-position-grid.html',
            controller: 'JobPositionCtrl'
        })
        .state('contact',{
            url:'/contact',
            templateUrl:'contact.html'
        })
        .state('about',{
            url:'/about',
            templateUrl:'aboutus-page.html'
        })
 
}]);
myApp.directive('slideit',function($timeout) {
    return {
       restrict: 'A',
       replace: true,
       template: '<ul class="slides">' +
                   '<li ng-repeat="picture in pictures">' +
                     '<img ng-src="{{picture.src}}" alt="" />' +
                   '</li>' +
                  '</ul>',
       link: function(scope, elm, attrs) {
          elm.ready(function() {
            $timeout(function(){
                scope.$apply( function()
              {
                 scope.slides = scope.slideit;

               });
                 $("." + $(elm[0]).attr('class')).bxSlider({
                     mode: 'fade',              // Type of transition between slides: 'horizontal', 'vertical', 'fade'    
                     speed: 500,              // Slide transition duration (in ms)
                     infiniteLoop: true,          // If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
                     hideControlOnEnd: false,       // If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
                     pager: true,             // If true, a pager will be added
                     pagerType: 'full',           // If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
                     controls: false,           // If true, "Next" / "Prev" controls will be added
                     auto: true,              // If true, slides will automatically transition
                     pause: 4000,             // The amount of time (in ms) between each auto transition
                     autoHover: true,           // Auto show will pause when mouse hovers over slider
                     useCSS: false  
                });
            });
           
            
            });
       }
    }; 
});
myApp.directive('fullbanner',function() {
    return {
       restrict: 'A',
       link: function(scope, elm, attrs) {
          elm.ready(function() {
      $('.fullwidthbanner').revolution({
        delay:9000,
        startwidth:1170,
        startheight:610,
        startWithSlide:0,

        fullScreenAlignForce:"off",
        autoHeight:"off",
        minHeight:"off",

        shuffle:"off",

        onHoverStop:"on",

        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:3,

        hideThumbsOnMobile:"off",
        hideNavDelayOnMobile:1500,
        hideBulletsOnMobile:"off",
        hideArrowsOnMobile:"off",
        hideThumbsUnderResoluition:0,

        hideThumbs:0,
        hideTimerBar:"off",

        keyboardNavigation:"on",

        navigationType:"bullet",
        navigationArrows:"none",
        navigationStyle:"round",

        navigationHAlign:"center",
        navigationVAlign:"bottom",
        navigationHOffset:0,
        navigationVOffset:30,

        soloArrowLeftHalign:"left",
        soloArrowLeftValign:"center",
        soloArrowLeftHOffset:0,
        soloArrowLeftVOffset:0,

        soloArrowRightHalign:"right",
        soloArrowRightValign:"center",
        soloArrowRightHOffset:0,
        soloArrowRightVOffset:0,


        touchenabled:"off",
        swipe_velocity:"0.7",
        swipe_max_touches:"1",
        swipe_min_touches:"1",
        drag_block_vertical:"false",

        parallax:"mouse",
        parallaxBgFreeze:"on",
        parallaxLevels:[10,7,4,3,2,5,4,3,2,1],
        parallaxDisableOnMobile:"off",

        stopAtSlide:-1,
        stopAfterLoops:-1,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        hideSliderAtLimit:0,

        dottedOverlay:"none",

        spinned:"spinner4",

        fullWidth:"off",
        forceFullWidth:"off",
        fullScreen:"off",
        fullScreenOffsetContainer:"#topheader-to-offset",
        fullScreenOffset:"0px",

        panZoomDisableOnMobile:"off",

        simplifyAll:"off",

        shadow:0
      });
           
            
            });
       }
    }; 
});

myApp.controller('ServiceCtrl', function ($scope) {

  
  $scope.bestDealClicked = function(src){
    $scope.title = 'Best Deals! You selected the best deal: ' + src;
  }
});

myApp.controller('MainCtrl', function($scope) {
  $scope.pictures = [
                 {src: '_content/services/finance.jpg' },
                 {src: '_content/services/slider/555x360-2.jpg' },
                 {src: '_content/services/slider/555x360-3.jpg' }
               ];


});

myApp.controller('ServiceCtrl', function ($scope) {

});

myApp.controller('JobPositionCtrl', function ($scope, $stateParams) {
    $scope.page = $stateParams.page;
            if($scope.page=='1'){
             $scope.jobs = [
                {
                  'id': 1,
                  'image': '_content/portfolio/370x230-1.jpg',
                  'title' : 'Automotive',
                  'location' :  'Bangkok',
                  'date' : 'May 9, 2015',
                  'description' : 'Maybe your experience will be qualified and if this opportunity is of interest to you, please provide an update resume, Expected salary and also availability to start working (in case you are qualified), as well as the best way to get in touch with you so that we can discuss this further and we would appreciate a prompt response.'
                },
                {
                  'id': 2,
                  'image': '_content/portfolio/370x230-2.jpg',
                  'title' : 'BTS&MRT Company',
                  'location' :  'Bangkok',
                  'date' : 'May 9, 2015',
                  'description' : 'Maybe your experience will be qualified and if this opportunity is of interest to you, please provide an update resume, Expected salary and also availability to start working (in case you are qualified), as well as the best way to get in touch with you so that we can discuss this further and we would appreciate a prompt response.'
                },
                 {
                  'id': 3,
                  'image': '_content/portfolio/370x230-3.jpg',
                  'title' : 'BTS&MRT Company',
                  'location' :  'Bangkok',
                  'date' : 'May 9, 2015',
                  'description' : 'Maybe your experience will be qualified and if this opportunity is of interest to you, please provide an update resume, Expected salary and also availability to start working (in case you are qualified), as well as the best way to get in touch with you so that we can discuss this further and we would appreciate a prompt response.'
                }
            ]
        } else if($scope.page=='2'){
            $scope.jobs = [
                {
                  'id': 4,
                  'image': '_content/portfolio/370x230-4.jpg',
                  'title' : 'Automotive2',
                  'location' :  'Bangkok',
                  'date' : 'May 9, 2015',
                  'description' : 'Maybe your experience will be qualified and if this opportunity is of interest to you, please provide an update resume, Expected salary and also availability to start working (in case you are qualified), as well as the best way to get in touch with you so that we can discuss this further and we would appreciate a prompt response.'
                },
                {
                  'id': 5,
                  'image': '_content/portfolio/370x230-5.jpg',
                  'title' : 'BTS&MRT Company2',
                  'location' :  'Bangkok',
                  'date' : 'May 9, 2015',
                  'description' : 'Maybe your experience will be qualified and if this opportunity is of interest to you, please provide an update resume, Expected salary and also availability to start working (in case you are qualified), as well as the best way to get in touch with you so that we can discuss this further and we would appreciate a prompt response.'
                },
                 {
                  'id': 6,
                  'image': '_content/portfolio/370x230-6.jpg',
                  'title' : 'BTS&MRT Company2',
                  'location' :  'Bangkok',
                  'date' : 'May 9, 2015',
                  'description' : 'Maybe your experience will be qualified and if this opportunity is of interest to you, please provide an update resume, Expected salary and also availability to start working (in case you are qualified), as well as the best way to get in touch with you so that we can discuss this further and we would appreciate a prompt response.'
                }
            ]
        }else if($scope.page=='3'){
          $scope.jobs = [
                {
                  'id': 7,
                  'image': '_content/portfolio/370x230-4.jpg',
                  'title' : 'Automotive3',
                  'location' :  'Bangkok',
                  'date' : 'May 9, 2015',
                  'description' : 'Maybe your experience will be qualified and if this opportunity is of interest to you, please provide an update resume, Expected salary and also availability to start working (in case you are qualified), as well as the best way to get in touch with you so that we can discuss this further and we would appreciate a prompt response.'
                },
                {
                  'id': 8,
                  'image': '_content/portfolio/370x230-5.jpg',
                  'title' : 'BTS&MRT Company3',
                  'location' :  'Bangkok',
                  'date' : 'May 9, 2015',
                  'description' : 'Maybe your experience will be qualified and if this opportunity is of interest to you, please provide an update resume, Expected salary and also availability to start working (in case you are qualified), as well as the best way to get in touch with you so that we can discuss this further and we would appreciate a prompt response.'
                },
                 {
                  'id': 9,
                  'image': '_content/portfolio/370x230-6.jpg',
                  'title' : 'BTS&MRT Company3',
                  'location' :  'Bangkok',
                  'date' : 'May 9, 2015',
                  'description' : 'Maybe your experience will be qualified and if this opportunity is of interest to you, please provide an update resume, Expected salary and also availability to start working (in case you are qualified), as well as the best way to get in touch with you so that we can discuss this further and we would appreciate a prompt response.'
                }
            ]
        }
    
});


