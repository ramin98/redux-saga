const initialState = {
    goods: [],
    myBag: [],
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_GOODS':
        return { ...state, goods: action.goods };
      case 'SET_MY_BAG':
        return { ...state, myBag: action.myBag };
      case 'ADD_ITEM_TO_BAG':
        return { ...state, myBag: [...state.myBag, action.product] };
      default:
        return state;
    }
  }
  
  export default rootReducer;
  