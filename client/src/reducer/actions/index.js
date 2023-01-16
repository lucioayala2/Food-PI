import axios from 'axios';
import{
    GET_ALL_RECIPE,
} from './actions';

export const getAllrecipes = () => {
    return async function (dispatch) {
      try {
        const json = await axios.get('/recipes/all');
        return dispatch({ type: GET_ALL_RECIPE, payload: json.data });
      } catch (error) {
        console.log(error);
      }
    };
  };