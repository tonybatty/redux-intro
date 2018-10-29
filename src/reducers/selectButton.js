function selectButton( state = {}, action ){
  switch(action.type) {
    case 'SELECT_BUTTON':

       console.log("4. update redux state");
    return {
      selectedButton: action.selectedButton
    }
    case 'RESET_BUTTON':
    return {
      selectedButton: undefined
    }
    default:
      return state;

  }
}

export default selectButton;
