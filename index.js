exports.handler = function(event, context, callback) {   
   // Use callback() and return information to the caller.
  var braintree = require("braintree");
    var gateway = braintree.connect({
	    environment: braintree.Environment.Sandbox,
	    merchantId: "2csz6t375q758m9x",
	    publicKey: "mpk8yfp847fnb4b2",
	    privateKey: "95393d62ea817ad98c85771b210500e4"
    }); 
  var nonceFromTheClient = event.nonce;
  gateway.transaction.sale({
  	amount: event.amount,
  	paymentMethodNonce: nonceFromTheClient,
  	options: {
    		submitForSettlement: true
  		}
	}, function (err, result) {
	    callback(null, result)
	    context.done()
	});
}