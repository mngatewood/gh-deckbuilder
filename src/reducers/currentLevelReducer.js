const currentLevelReducer = (state = 1, action) => {
  let copyState = state
  switch (action.type) {
    case 'INCREASE_CURRENT_LEVEL':
      return copyState + 1;
    case 'DECREASE_CURRENT_LEVEL':
      return copyState - 1;
    default:
      return state;
  }
};

export default currentLevelReducer;