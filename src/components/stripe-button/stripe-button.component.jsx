import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const publishablkey= 'pk_test_51NnLCiEFifMS6rRvsBUVvG5nQtmrC0eTp4wEdtmoxfy8Q7OWeKTqpIJpPEIx6FjY7MXLu507038ARWwfb7OXpwtf00HeSx4OSB';

const onToken = token =>{
    console.log(token);
    alert('Payment Successful');
}
    return(
        <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
image='./ffavicon.ico'
imageStyle={{ width: "64px", height: "64px" }}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishablkey}
        />
    )
}
export default StripeCheckoutButton;