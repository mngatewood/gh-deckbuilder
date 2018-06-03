export const getAvailable = (cards, selected) => {
  console.log(cards)
  if (selected === []) {
    return cards;
  } else {
    let available = [...cards]
    selected.forEach(selectedCard => {
      available = available.filter(availableCard => {
        return availableCard.id !== selectedCard.id
      })
    })
    return available
  }
}

