import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import '../index.css';
import Checkout from '../components/Checkout';

//==============================
//Store Pages
//==============================
const Store = ({ cartItems, setCartItems }) => {

  //PRODUCT CARDS
  const [products] = useState([
    { id: 1, name: "Starter Pack", price: 4.99, credits: 100, image: "starter.jpg" },
    { id: 2, name: "Gamer Pack", price: 9.99, credits: 250, image: "gamer.jpg" },
    { id: 3, name: "Pro Gamer", price: 19.99, credits: 600, image: "pro.jpg" },
    { id: 4, name: "VIP Elite", price: 49.99, credits: 2000, image: "vip.jpg" }
  ]);

  //######################
  // CART MANAGEMENT
  //######################

  //ADDING ITEM TO CART
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id); // Check if the product exist in cart using id

      if (existingItem) { // If exist, create increment of its quantity by creating new object
        return prevItems.map(item => 
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, {...product, quantity: 1}];
    });
  };

  //REMOVE ITEM FROM CART
  const removeFromCart = (index) => {
    setCartItems(prevItems => {
      const newItems = [...prevItems]; // CREATE NEW ARRAY COPYING ALL ITEMS FROM PREVITEMS
      const item = newItems[index]; //GET COPIES OF INDIVIDUAL CART ITEM

      if (item.quantity > 1) {
        newItems[index] = { ...item, quantity: item.quantity - 1 }; //UPDATE THE ITEM COPY IN INDEX
      } else {
        newItems.splice(index, 1); //REMOVE COMPLETELY
      }

      return newItems;
    });
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const [showCheckout, setShowCheckout] = useState(false); //CHECKOUT STATE

  //#################################
  // UI DESIGN
  //#################################
  return (
    <div className="store-container">
      <div className="store-header">
          <div className="store-title">
            <h1>Game Credit Store</h1>
          </div>
        <div className="cart-indicator">
          <FiShoppingCart />
          <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span> {/* Updated to show total quantity */}
        </div>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image" style={{ backgroundImage: `url(/img/${product.image})` }}></div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.credits} Credits</p>
              <div className="price">${product.price.toFixed(2)}</div>
              <button 
                onClick={() => addToCart(product)}
                className="add-to-cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h2>Your Cart</h2>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-info">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => removeFromCart(index)}
                  className="remove-item"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button onClick={() => setShowCheckout(true)} className="checkout-button">Proceed to Checkout</button>
        </div>
      )}

        {/* ======================
           CHECKOUT MODAL RENDER
         ====================== */}
      {showCheckout && (
        <Checkout
          cartItems={cartItems}
          total={total}
          onClose={() => setShowCheckout(false)} // <-- Close handler
        />
      )}
    </div>
  );
};

export default Store;