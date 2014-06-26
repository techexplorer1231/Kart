'use strict';

//Products service used to communicate Products REST endpoints
var app = angular.module('products');
app.factory('Products', ['$resource',
	function($resource) {
		return $resource('products/:productId', { productId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

app.factory('ProductsHelper', function(){
	var tmpProduct;
	var price;
	var quantity = 1;
	return {
        setCurrentProduct: function(productDetail){
        	tmpProduct = productDetail;
        	price = productDetail.price;
            return true;
        },
        getCurrentProduct: function(){
			return tmpProduct;
        },
        decrementQuantity: function(){
        	quantity -= 1; 
        	if(quantity === 0){
        		quantity = 1;
        	}else{
				tmpProduct.stock += 1;
	        	tmpProduct.price -= price;
        	}
        	return quantity;
        },
        incrementQuantity: function(){
        	quantity += 1; 
        	tmpProduct.stock -= 1;
        	tmpProduct.price += price;

        	return quantity;
        }
    }; 
});

