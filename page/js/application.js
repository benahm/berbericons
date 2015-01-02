$(document).on('click', '.js-preview-switcher .js-view-mode', function(event){
  event.preventDefault();
  var $container = $(event.currentTarget).closest('.js-preview-switcher');
  $container.find('.js-view-mode').removeClass('is-selected');
  $(event.currentTarget).addClass('is-selected');
  $container.removeClass('grid light');
  $container.addClass($(event.currentTarget).attr('data-class'));
});

$(document).on('click', '.js-showoff-icon', function(event){
    var $icon = $(event.currentTarget).find('.mega-berbericon').fadeOut(200, function(){
    var $iconList = $('.js-icon-list [data-name]:not([data-name*=logo])');
    var newIcon = $iconList.eq(Math.floor(Math.random() * $iconList.length)).attr('data-name');
    $(event.currentTarget).find('.mega-berbericon').attr('class', "mega-berbericon " + newIcon);
    $icon.fadeIn(200);
  });
});

$(document).on('keyup', '.js-search-field', function(event){
  var filter = $(this).val().toLowerCase();
  var $container = $(this).closest('.js-search');
  var $resultsList = $container.find('.js-results');

  if (filter.length === 0) return (function() {
    $resultsList.removeClass('no-results is-showing');
    $('body').removeClass('menu-active');
  })();

  $resultsList.find('.js-search-result').addClass('is-hidden');
  var $show = $resultsList.find('.js-search-result').filter(function(index){
    if($(this).attr('data-keywords').indexOf(filter) >= 0){ return true; }
    if($(this).attr('data-name').indexOf(filter) >= 0){ return true; }
    return false;
  }).removeClass('is-hidden');

  if ($show.length > 0) {
    $resultsList.addClass('is-showing');
    $('body').addClass('menu-active');
  }
  $resultsList.toggleClass('no-results', $show.length === 0);
});

$(document).on('click', '.js-modal-backdrop', function(event){
  $('body').removeClass('menu-active');
  $('.js-results').removeClass('no-results is-showing');
});

$(document).on('click', '.js-search-result', function(event){
  $('.js-results').removeClass('is-showing')
  $('.js-search-result').addClass('is-hidden')
  $('.js-search-field').val("");
});

$(document).ready(function(){
  setInterval(function(){
    $( '.js-showoff-icon' ).trigger( "click" );
  },2000);
});

/*================================== data ======================================*/

var data={
  ya:{
    unicode: "e600"
  },
  ya3:{
    unicode: "e601"
  },
  yab:{
    unicode: "e602"
  },
  yach:{
    unicode: "e603"
  },
  yad:{
    unicode: "e604"
  },
  yadd:{
    unicode: "e605"
  },
  yaf:{
    unicode: "e606"
  },
  yag:{
    unicode: "e607"
  },
  yagh:{
    unicode: "e608"
  },
  yah:{
    unicode: "e609"
  },
  yahh:{
    unicode: "e60a"
  },
  yaj:{
    unicode: "e60b"
  },
  yak:{
    unicode: "e60c"
  },
  yakh:{
    unicode: "e60d"
  },
  yal:{
    unicode: "e60e"
  },
  yam:{
    unicode: "e60f"
  },
  yan:{
    unicode: "e610"
  },
  yaq:{
    unicode: "e611"
  },
  yar:{
    unicode: "e612"
  },
  yarr:{
    unicode: "e613"
  },
  yas:{
    unicode: "e614"
  },
  yass:{
    unicode: "e615"
  },
  yat:{
    unicode: "e616"
  },
  yatt:{
    unicode: "e617"
  },
  yaw:{
    unicode: "e618"
  },
  yay:{
    unicode: "e619"
  },
  yaz:{
    unicode: "e61a"
  },
  yazz:{
    unicode: "e61b"
  },
  yey:{
    unicode: "e61c"
  },
  yi:{
    unicode: "e61d"
  },
  you:{
    unicode: "e61e"
  }
}

/*================================ Angularjs ===================================*/

'use strict';


var app=angular.module('app', [
  'ngRoute'
])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl:'home.html',
    controller:'homeCtrl',
    controllerAs: 'home'
  })
  .when('/usage',{
    templateUrl:'usage.html',
    controller:'usageCtrl',
    controllerAs: 'usage'
  })
  .when('/icon/:iconName',{
    templateUrl:'icon/icon.html',
    controller:'iconCtrl',
    controllerAs: 'icon'
  })
  .otherwise({redirectTo: '/'});
}]);

app.controller('appCtrl', ['$scope','$route', '$routeParams',function($scope,$routeParams) {

}]);

app.controller('homeCtrl', ['$scope','$routeParams',function($scope,$routeParams) {

}]);

app.controller('usageCtrl', ['$scope','$routeParams',function($scope,$routeParams) {

}]);

app.controller('iconCtrl', ['$scope','$routeParams',function($scope,$routeParams) {
  $scope.iconName = $routeParams.iconName;
  $scope.unicode=data[$scope.iconName].unicode;
}]);
