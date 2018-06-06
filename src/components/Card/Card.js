import './Card.css';
import React from 'react';

export const Card = (card) => {

  const dragstartHandler = (event) => {
    const parent = event.target.parentNode.parentNode.id;
    const id = event.target.id;
    const data = JSON.stringify({id, parent});
    setTimeout( () => {
      document.getElementById(id).style.visibility = "hidden";
    }, 1);
    event.dataTransfer.setData("text/plain", data);
    event.dataTransfer.dropEffect = "move";
  };

  const dragendHandler = (event) => {
    const id = event.target.id;
    document.getElementById(id).style.visibility = "visible";
  };

  return (
    <div className="card" 
      id={card.id}
      style={{ backgroundImage: `url(${card.image})`}}
      draggable="true"
      onDragStart={ (event) => dragstartHandler(event) }
      onDragEnd={ (event) => dragendHandler(event) }
    >
    </div>
  );

};
