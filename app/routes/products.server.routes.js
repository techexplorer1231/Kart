'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var products = require('../../app/controllers/products');

	// Products Routes
	app.route('/products')
		.get(products.list)
		.post(users.requiresLogin, products.create);

	app.route('/productsGetCount')
		.get(products.productsCount);

	app.route('/productsGetRandomProduct')
		.get(products.productsRandomProduct);

	app.route('/productsGetBestSellerProduct')
		.get(products.productsBestSellerProduct);

	app.route('/findSelectedProduct')
		.get(products.productSelected);
	
	app.route('/products/:productId')
		.get(products.read)
		.put(users.requiresLogin, products.hasAuthorization, products.update)
		.delete(users.requiresLogin, products.hasAuthorization, products.delete);

	// Finish by binding the Product middleware
	app.param('productId', products.productByID);
};