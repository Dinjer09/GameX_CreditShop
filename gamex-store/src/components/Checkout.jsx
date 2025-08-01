import React, {useState} from 'react';

/**
 * Checkout Component
 * Handles the final order confirmation process including:
 * - Customer information form
 * - Order summary display
 * - Order submission
 */
const Checkout = ({ cartItems, total, onClose }) => {
  // ======================
  // FORM STATE
  // ======================
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

    const [errors, setErrors] = useState({
    email: '',
    name: ''
  });

  // ======================
  // EMAIL VALIDATION
  // ======================
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.includes('@')) {
      return "Email must contain @ symbol";
    }
    if (!email.endsWith('.com')) {
      return "Email must end with .com domain";
    }
    if (!regex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  // ======================
  // HANDLE INPUT CHANGES
  // ======================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation
    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: validateEmail(value)
      }));
    }
  };

  // ======================
  // ORDER SUBMISSION
  // ======================
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const emailError = validateEmail(formData.email);
    const nameError = !formData.name ? "Name is required" : "";
    
    setErrors({
      email: emailError,
      name: nameError
    });

    if (emailError || nameError) {
      return;
    }

    // Process order (mock)
    console.log('Order submitted:', { 
      ...formData, 
      items: cartItems, 
      total 
    });
    
    alert(`Order confirmed! Total: $${total.toFixed(2)}`);
    onClose();
  };

  return (
    <div className="checkout-overlay">
      <div className="checkout-modal">
        <h2>Complete Your Purchase</h2>
        
        {/* ======================
             ORDER SUMMARY SECTION
           ====================== */}
        <div className="checkout-items">
          {cartItems.map(item => (
            <div key={item.id} className="checkout-item">
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* ======================
             CUSTOMER FORM SECTION
           ====================== */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name*</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email*</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Shipping Address</label>
            <textarea 
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
            />
          </div>

          {/* ======================
               PAYMENT & ACTIONS
             ====================== */}
          <div className="checkout-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="checkout-actions">
            <button type="submit" className="confirm-button">
              Confirm Order
            </button>
            <button 
              type="button" 
              onClick={onClose}
              className="cancel-button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;