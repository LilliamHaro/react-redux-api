import { SET_DATA_API } from '../constants';


// se isnatlo react-thunk para que este action creator pueda retornar una funcion y no solo un objeto plano como normalmente pasa
export function setDataApi(){
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then( json => {
      dispatch({
        type:SET_DATA_API,
        payload: json
      })
      console.log('json',json)
    })
  }

}