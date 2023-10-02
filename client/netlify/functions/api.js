const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { token, amount } = JSON.parse(event.body);

    const body = {
      source: token.id,
      amount,
      currency: 'usd',
    };

    const stripeRes = await stripe.charges.create(body);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: stripeRes }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
