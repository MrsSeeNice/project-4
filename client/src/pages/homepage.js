import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Welcome to FavoriteColors</h1>
                <p>Discover and discuss the meanings, symbolism, and beauty of your favorite colors.</p>
            </header>
            
            <div className="home-actions">
                <Link to="/questions" className="action-link">
                    View Questions
                </Link>
                <Link to="/dashboard" className="action-link">
                    Go to Dashboard
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
