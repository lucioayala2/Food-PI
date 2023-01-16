import {
    GET_ALL_RECIPE
}
from './actions/actions';

const initialState ={
  recipes: [],

}
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPE: {
      return {
        ...state,
        recipes: action.payload,
        allrecipes: action.payload,
        page: state.page < action.payload.length ? state.page : 1,
        error: undefined,
      };
    }
    default: return state;
  }
}

export default Reducer;
