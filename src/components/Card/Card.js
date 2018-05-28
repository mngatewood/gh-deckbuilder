import './Card.css';
import React from 'react';

export const Card = (card) => {
  
  return (
    <div className="card">
      <img src={card.image} alt={card.name}/>
    </div>
  )

}
