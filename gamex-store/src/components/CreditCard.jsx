import React from 'react';

const CreditCard = ({ product, onAddToCart }) => {
  return (
    <div className="credit-card">
      <div className="card-image">
        <img src={`/img/${product.image}`} alt={product.name} />
      </div>
      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.credits} Credits</p>
        <div className="card-footer">
          <span className="price">${product.price.toFixed(2)}</span>
          <button onClick={onAddToCart} className="btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;