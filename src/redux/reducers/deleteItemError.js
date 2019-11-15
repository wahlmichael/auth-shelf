const deleteItemError = (state = '', action) => {
    switch (action.type) {
      case 'DELETE_REQUEST_FAILED':
          return 'The Delete Requeset Failed. If you did not add the item you will not be able to delete it.'
      default:
        return state;
    }
  };
  
  
  // user will be on the redux state at:
  // state.user
  export default deleteItemError;



