var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope){
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.presentItem = false;
    $scope.addItem = function(){
        if (!$scope.addMe) {return;}
        if($scope.products.indexOf($scope.addMe) != -1)
            $scope.presentItem = true;
        else{
            $scope.products.push($scope.addMe);
            $scope.presentItem = false;
        }
    };
    $scope.removeItem = function(item){
        $scope.products.splice(item, 1);
        $scope.presentItem = false;
    };
});