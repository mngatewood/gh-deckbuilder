const changeUserReducer = (state = "", action) => {
  switch (action.type) {
    case 'CHANGE_USER':
      return action.user;
    default:
      return state;
  }
};

export default changeUserReducer;