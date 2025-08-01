import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Store from './pages/Store';
import './index.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app">
      {/* Login Popup */}
      {showLogin && (
        <div className="popup">
          <button onClick={() => setShowLogin(false)} className="close">&times;</button>
          <div className="form">
            <h2>Log in</h2>
            {/* Login form elements */}
          </div>
        </div>
      )}

      <Navbar 
        setCurrentPage={setCurrentPage} 
        setShowLogin={setShowLogin}
        cartItems={cartItems}
      />
      
      <main className="container">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'store' && <Store cartItems={cartItems} setCartItems={setCartItems} />}
      </main>

      <footer className="copyright container">
        <a href="#" className="logo">Gamex<span>Store</span></a>
        <p>&#169; NetPipol All Right Reserved</p>
      </footer>
    </div>
  );
}

export default App;