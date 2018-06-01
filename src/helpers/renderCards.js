export const renderCards = (cards) => {
  let displayCards

  if (cards) {
    displayCards = cards.map(card => {
      return <Card
        key={card.id}
        id={card.id}
        image={card.image_url}
        name={card.name} />;
    });
  }
  return displayCards
}