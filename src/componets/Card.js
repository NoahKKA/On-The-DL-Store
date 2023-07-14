import React, { useState } from 'react';
import cards from '../data/cards';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = () => {
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleCardClick = (cardId) => {
    setFlippedCardId(cardId === flippedCardId ? null : cardId);
  };

  return (
    <div className="card-container mb-5">
      {Object.values(cards).map((card) => (
        <div
          className={`card ${flippedCardId === card.id ? 'flipped' : ''}`}
          key={card.id}
          onClick={() => handleCardClick(card.id)}
        >
          <div className="card-inner">
            <div className="card-front">
              <img src={card.mainPicture} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">{card.des}</p>
                <Link to={`/picture/${card.id}`} className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="card-back">
              <p>Card Back Content</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
