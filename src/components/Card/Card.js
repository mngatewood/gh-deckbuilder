import './Card.css';
import React from 'react';

export const Card = (card) => {

  const dragstartHandler = (event) => {
    const parent = event.target.parentNode.parentNode.id;
    const id = event.target.id;
    const data = JSON.stringify({id, parent})
    setTimeout( () => {
      document.getElementById(id).style.visibility = "hidden";
    }, 1)
    console.log('card #' + id + ' picked up from ' + parent);
    event.dataTransfer.setData("text/plain", data);
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
