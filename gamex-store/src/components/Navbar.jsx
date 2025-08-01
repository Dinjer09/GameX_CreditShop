import { FiHome, FiShoppingBag, FiBell, FiShoppingCart, FiUser } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = ({ setCurrentPage, setShowLogin, setShowCart, cartItems, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: <FiHome /> },
    { id: 'trending', label: 'Trending' },
    { id: 'feature', label: 'Featured' },
    { id: 'fantasy', label: 'Fantasy Games' },
    { id: 'contact', label: 'Contact us' }
  ];

  return (
    <header className="navbar-header">
      <div className="nav container">
        {/* Logo - Left Side */}
        <div className="logo-container">
          <a 
            href="#" 
            onClick={() => setCurrentPage('home')} 
            className="logo"
          >
            Gamex<span>store</span>
          </a>
        </div>
        
        {/* Menu - Center */}
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-list">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    if (item.id === 'home') {
                      e.preventDefault();
                      setCurrentPage('home');
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item.icon && <span className="nav-icon">{item.icon}</span>}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Icons - Right Side */}
        <div className="nav-icons">
          <i className="icon"><FiBell /></i>
          <i className="icon cart-icon" onClick={() => setShowCart(true)}>
            <FiShoppingCart />
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
          </i>
          <i 
            className="icon" 
            onClick={() => setShowLogin(true)}
          >
            <FiUser />
          </i>
          <div 
            className={`menu-icon ${isMenuOpen ? 'open' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;