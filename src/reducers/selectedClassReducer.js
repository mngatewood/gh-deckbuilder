const selectedClassReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADD_SELECTED_CLASS':
      return action.selectedClass;
    default:
      return state;
  }
};

export default selectedClassReducer;
