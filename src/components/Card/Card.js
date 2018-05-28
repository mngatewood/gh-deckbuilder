import './Card.css';
import React from 'react';

export const Card = (card) => {

  const dragstartHandler = (event) => {
    console.log(event.target);
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.dropEffect = "move";
  }

  return (
    <div className="card" 
      id={card.id}
      style={{ backgroundImage: `url(${card.image})`}}
      draggable="true"
      onDragStart={ (event) => dragstartHandler(event) }>
    </div>
  )

}
