import {
    PAGINAS
}
from './actions';

const initialState ={

}
export function paginado(numero) {
    return (dispatch) => {
      dispatch({ type: PAGINAS, payload: numero });
    };
  }



 export default function rootReducer(state= initialState, action){
    
 }