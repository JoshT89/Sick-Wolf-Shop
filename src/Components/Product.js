import React, { useState } from 'react';


const designs = [
  { name: "Sikwolf Tiki", image: "/designs/sikwolf tiki.png" },
  { name: "Happy Skull", image: "/designs/happy skull.png" },
  { name: "Satan", image: "/designs/satan.png" },
  { name: "Bird for Brains", image: "/designs/Bird for brains.png" },
  { name: "Unicorn Guts", image: "/designs/Unicorn guts.png" },
  { name: "DOGno BG", image: "/designs/DOGno bg.png" },
];

function Product({ onAddToBasket }) {

  const DesignBox = ({ design, onAdd }) => {
    const [productType, setProductType] = useState('');
    const [size, setSize] = useState('');

    return (
      <div className="design-box">
        <img src={design.image} alt={design.name} />
        <h3>{design.name}</h3>
        <select value={productType} onChange={e => setProductType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="Poster">Poster</option>
          <option value="T-Shirt">T-Shirt</option>
          <option value="Jumper">Jumper</option>
          <option value="Hat">Hat</option>
        </select>
        <select value={size} onChange={e => setSize(e.target.value)}>
          <option value="">Select Size</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">Extra Large</option>
        </select>
        <button onClick={() => onAdd({ design: design.name, productType, size })}>Add to Basket</button>
      </div>
    );
  };

  return (
    <div className="product">
      {designs.map(design => (
        <DesignBox key={design.name} design={design} onAdd={onAddToBasket} />
      ))}
    </div>
  );
}

export default Product;

