exports.handler = function(event, context, callback) {   
  var stripe = require("stripe")("sk_test_qCqgy1i7lugfoaD1ghoJzcqc");

  // Token is created using Stripe.js or Checkout!
  // Get the payment token submitted by the form:
  var token = event.token; // Using Express
  var totalAmount = parseInt(event.amount);
// Charge the user's card:
  var charge = stripe.charges.create({
    amount: totalAmount,
    currency: "usd",
    description: "Test Charge",
    source: token,
    destination: {
    amount: totalAmount-600,
    account: event.driverStripeId,
  },
  }, function(err, charge) {
    callback(err, charge);
    context.done();
  });
  
}