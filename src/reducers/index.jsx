import { SET_DATA_API } from '../constants';

const initialState = {
  post:[]
}

function rootReducer(state = initialState, action) {

  // esta "accion" creo que es lo que retorna el action creator executado y por los tanto el payload será la data de la api
  if(action.type = SET_DATA_API) {
    return Object.assign(
      {},
      state,
      {
        post:state.post.concat(action.payload)
      }
    )
  }

  return state;

}

export default rootReducer;