// src/components/Cart.jsx
import React, { useState } from 'react';
import { FiShoppingCart, FiX } from 'react-icons/fi';

const Cart = ({ cartItems, onRemoveItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Cart Icon Button */}
      <div className="cart-icon-container">
        <button 
          onClick={() => setIsOpen(true)}
          className="cart-icon-button"
        >
          <FiShoppingCart className="cart-icon" />
          {cartItems.length > 0 && (
            <span className="cart-badge">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      {/* Cart Popup Modal */}
      {isOpen && (
        <div className="cart-modal-overlay">
          <div className="cart-modal">
            <div className="cart-header">
              <h3>Your Shopping Cart</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="close-button"
              >
                <FiX />
              </button>
            </div>
            
            <div className="cart-content">
              {cartItems.length === 0 ? (
                <p className="empty-cart-message">Your cart is empty</p>
              ) : (
                <ul className="cart-items">
                  {cartItems.map((item, index) => (
                    <li key={index} className="cart-item">
                      <div className="item-info">
                        <span className="item-name">{item.name} (x{item.quantity})</span>
                        <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <button
                        onClick={() => onRemoveItem(index)}
                        className="remove-item-button"
                      >
                        <FiX size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span className="total-amount">${total.toFixed(2)}</span>
                </div>
                <button className="checkout-button">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;