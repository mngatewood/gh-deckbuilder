const selectedClassReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADD_SELECTED_CLASS':
      return action.selectedClass;
    case 'REMOVE_SELECTED_CLASS':
      return '';
    default:
      return state;
  }
};

export default selectedClassReducer;