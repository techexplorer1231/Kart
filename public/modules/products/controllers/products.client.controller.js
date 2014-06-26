'use strict';

// Products controller
angular.module('products').controller('ProductsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Products', '$http', '$q', 'ProductsHelper',
  function($scope, $stateParams, $location, Authentication, Products, $http, $q, ProductsHelper) {
    $scope.authentication = Authentication;

    // Create new Product
    $scope.create = function() {
      // Create new Product object
      var product = new Products({
        name: this.name
      });

      // Redirect after save
      product.$save(function(response) {
        $location.path('products/' + response._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });

      // Clear form fields
      this.name = '';
    };

    // Remove existing Product
    $scope.remove = function(product) {
      if (product) {
        product.$remove();

        for (var i in $scope.products) {
          if ($scope.products[i] === product) {
            $scope.products.splice(i, 1);
          }
        }
      } else {
        $scope.product.$remove(function() {
          $location.path('products');
        });
      }
    };

    // Update existing Product
    $scope.update = function() {
      var product = $scope.product;

      product.$update(function() {
        $location.path('products/' + product._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Products
    $scope.find = function(val) {
      //$scope.products = Products.query();
      $http.get('/products', {
        params: {
          items: val
        }
      }).success(function(data, status, headers, config) {
        $scope.products = data;
      });
    };

    // Find existing Product
    $scope.findOne = function() {
      $http.get('/findSelectedProduct', {
        params: {
          productId: $stateParams.productId
        }
      }).success(function(data, status, headers, config) {
        console.log(data);
        ProductsHelper.setCurrentProduct(data);
        $scope.product = ProductsHelper.getCurrentProduct();
      });
      $scope.quantitySelectorValue = 1;
    };

    $scope.getRandomProduct = function(productsCount, productSortType) {
      $http.get('/productsGetCount').success(function(count, status, headers, config) {
        var skip = Math.floor(Math.random() * (count - 1 + productsCount)) + 1;
        $http.get('/productsGetRandomProduct', {
          params: {
            skipItems: skip,
            itemsCount: productsCount,
            itemSortCategory: productSortType
          }
        }).success(function(data, status, headers, config) {
          $scope.randomProducts = data;
          var skip = Math.floor(Math.random() * (count - 1)) + 1;
        });
      });
    };

    $scope.getBestSellerProduct = function(productsCount) {
      $http.get('/productsGetCount').success(function(count, status, headers, config) {
        var skip = Math.floor(Math.random() * (count - 1 + productsCount)) + 1;
        $http.get('/productsGetBestSellerProduct', {
          params: {
            itemsCount: productsCount,
            skipItems: skip,
          }
        }).success(function(data, status, headers, config) {
          $scope.BestSellerProducts = data;
        });
      });
    };

    $scope.increment = function(){
      var a = ProductsHelper.incrementQuantity();
      $scope.quantitySelectorValue = a;
    };

    $scope.decrement = function(){
      var a = ProductsHelper.decrementQuantity();
      $scope.quantitySelectorValue = a;
    };

  }
]);