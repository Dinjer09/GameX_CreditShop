import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import '../index.css';

const Home = ({ setCurrentPage }) => {
  const trendingGames = [
    { id: 1, name: "Honkai Star Rail", genre: "Sci-Fi", image: "hsr.png" },
    { id: 2, name: "Cyberpunk 2077", genre: "Action", image: "trending1.webp" },
    { id: 3, name: "Valorant", genre: "FPS", image: "new12.jpg" },
    { id: 4, name: "Genshin Impact", genre: "Fantasy", image: "new13.jpg" }
  ];

  const featuredGames = [
    { id: 1, name: "Subway Surfers", genre: "Arcade", image: "new1.jpg" },
    { id: 2, name: "Call of Duty: Mobile", genre: "Action", image: "new2.jpg" },
    { id: 3, name: "PUBG", genre: "Battle Royale", image: "new6.png" },
    { id: 4, name: "Fortnite", genre: "Battle Royale", image: "new7.png" }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>TRAILBLAZE AMONG <span>THE STARS</span></h1>
          <p>Purchase game credits at the best prices and dominate your favorite games</p>
          <button 
            onClick={() => setCurrentPage('store')}
            className="cta-button"
          >
            Topup Now <FiArrowRight />
          </button>
        </div>
        <div className="hero-image"></div>
      </section>

      {/* Trending Games */}
      <section className="trending-section">
        <div className="section-header">
          <div className="flame-icon">🔥</div>
          <h2>Trending Games</h2>
        </div>
        <div className="games-grid">
          {trendingGames.map(game => (
            <div key={game.id} className="game-card">
              <div className="game-image" style={{ backgroundImage: `url(/img/${game.image})` }}></div>
              <div className="game-info">
                <h3>{game.name}</h3>
                <p>{game.genre}</p>
                <button className="buy-button">Buy Credit</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Games */}
      <section className="featured-section">
        <div className="section-header">
          <div className="game-icon">🎮</div>
          <h2>Featured Games</h2>
        </div>
        <div className="games-grid">
          {featuredGames.map(game => (
            <div key={game.id} className="game-card">
              <div className="game-image" style={{ backgroundImage: `url(/img/${game.image})` }}></div>
              <div className="game-info">
                <h3>{game.name}</h3>
                <p>{game.genre}</p>
                <button className="buy-button">Buy Credit</button>
              </div>
            </div>
          ))}
        </div>
        <div className="next-page">
          <button>Next Page</button>
        </div>
      </section>
    </div>
  );
};

export default Home;