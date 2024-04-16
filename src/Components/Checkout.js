import React from 'react';

function Checkout() {
  const handleCheckout = () => {
    
    alert('Proceeding to checkout...');
  };

  return (
    <div className="checkout">
      
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Checkout;