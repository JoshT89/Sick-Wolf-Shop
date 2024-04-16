import React from 'react';

function Basket({ items }) {
  return (
    <div className="basket">
      <h2>Your Basket</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{`${item.productType} - Size: ${item.size}`}</li>
          ))}
        </ul>
      ) : (
        <p>Your basket is empty.</p>
      )}
    </div>
  );
}

export default Basket;