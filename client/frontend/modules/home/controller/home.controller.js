movieshop.controller('homeCtrl', ["$scope","services","$css",function($scope,services,$css){
	$css.remove(['/movieshop_fw_php_angularjs/client/frontend/assets/css/header.css']);
	$css.add(['/movieshop_fw_php_angularjs/client/frontend/modules/home/view/css/style.css','/movieshop_fw_php_angularjs/client/frontend/modules/home/view/css/header.css']);
	$css.remove('/movieshop_fw_php_angularjs/client/frontend/modules/home/controller/test.js');
	console.log("entra");

	services.get('home','rated_movies').then(function(data){
		console.log(data);
		$scope.rated_movies = data;
	});

	services.get('home','visited_movies').then(function(data){
		console.log(data);
		$scope.most_viewed_movies = data;
	});
	

}]).directive("owlCarousel", function() {
	return {
		restrict: 'E',
		transclude: false,
		link: function (scope) {
			scope.initCarousel = function(element) {
			  // provide any default options you want
				var defaultOptions = {
				};
				var customOptions = scope.$eval($(element).attr('data-options'));
				// combine the two options objects
				for(var key in customOptions) {
					defaultOptions[key] = customOptions[key];
				}
				// init carousel
				$(element).owlCarousel(defaultOptions);
			};
		}
	};
})
.directive('owlCarouselItem', [function() {
	return {
		restrict: 'A',
		transclude: false,
		link: function(scope, element) {
		  // wait for the last item in the ng-repeat then call init
			if(scope.$last) {
				scope.initCarousel(element.parent());
			}
		}
	};
}]);
