var movieshop = angular.module('movieshop', ['ngRoute','ngMaterial','angularCSS','ui.bootstrap','angularUtils.directives.dirPagination']);
movieshop.config(['$routeProvider', '$locationProvider',
function ($routeProvider, $locationProvider) {
        $routeProvider
                               
                .when("/", {redirectTo: '/home'})

                .when("/home", {
                        templateUrl: "frontend/modules/home/view/home.view.html", 
                        controller: "homeCtrl",
                        resolve: {
                                rated_movies: function (services) {
                                        return services.get('home','rated_movies');
                                },
                                visited_movies: function (services) {
                                        return services.get('home','visited_movies');
                                },
                                visited_genres: function (services) {
                                        return services.get('home','visited_genres');
                                }
                        }
                })

                .when("/contact", {templateUrl: "frontend/modules/contact/view/contact.view.html",controller: "contactCtrl"})

                .when("/shop", {
                        templateUrl: "frontend/modules/shop/view/shop.view.html",
                        controller: "shopCtrl",
                        resolve: {
                                getAllMovies: function (services) {
                                        return services.get('shop','getAllMovies');
                                },
                                getAllGenres: function (services) {
                                        return services.get('shop','getAllGenres');
                                }
                        }
                })
                
                .otherwise("/", {redirectTo: '/'});
    }]);