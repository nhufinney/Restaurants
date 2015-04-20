bestRestaurants.controller("RestaurantsCtrl", function RestaurantsCtrl($scope) {
    $scope.restaurants = [];
    $scope.addRestaurant = function() {
        $scope.restaurants.push({name: $scope.restaurantName, typeFood: $scope.restaurantFoodType, address: $scope.restaurantLocation, priceRange: $scope.restaurantPriceRange});
        $scope.restaurantName = $scope.restaurantFoodType = $scope.restaurantLocation = $scope.restaurantPriceRange = null;
    };
    $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
};

    
});
