export const fetchPostDeck = async (name, selectedClass, level, cards) => {
  const url = 'http://localhost:8080/api/v1/decks/';
  console.log(name)
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": name,
        "class": selectedClass,
        "level": level,
        "cards": cards })
    })
      .then(response => {
        switch (response.status) {
          case 201: {
            console.log('Success!')
          }; break;
          case 422: {
            console.log('Error: Unprocessable Entity')
          }; break;
          case 500: {
            console.log('Error: Internal Server Error')
          }; break;
          default: {
            console.log('Unknown response.')
          };
        }
      })
  } catch (error) {
    alert('Error: ' + error.message);
  }

}
