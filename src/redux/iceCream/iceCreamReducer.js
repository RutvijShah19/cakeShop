import { BUY_ICE_CREAM } from './iceCreamTypes';

const initialState = {
  numOfIceCream: 20
}

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
        return {
          numOfIceCream: state.numOfIceCream > 0 ? state.numOfIceCream - 1 : 0
        }
      break;
    default:
      return state;
  }
}
