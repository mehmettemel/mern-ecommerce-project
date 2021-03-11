import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51HxYq2ERiqFpQrNmbWlndnw6CY7t6xtHAVBG20oBCDgbwEbiTft0Rotz8S024j6iLtkngXeAMltaGWZMbRcceFb700FHA5lqQP'

  const onToken = (token) => {
    console.log(token)
    // THIS IS BACKEND STUFF
    alert('PAYMENT SUCCESSFUL')
  }
  return (
    //check react-stripe-checkout doc
    <StripeCheckout
      label='Pay Now'
      name='Temelucci Shop'
      billingAddress
      shippingAddress
      image='https://www.freelogodesign.org/file/app/client/thumb/e0d4ac72-6ca0-4126-b77d-4713133498bf_200x200.png?1607783493502'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
