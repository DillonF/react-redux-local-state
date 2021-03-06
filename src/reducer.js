import { RRLS_SET_COMPONENT_STATE } from './actions'


const reducer = (state = {}, action) => {
  switch(action.type) {
    case RRLS_SET_COMPONENT_STATE:
      let newstate = {...state}
      newstate[action.name] = {...action.payload}
      return newstate
    default:
      return state
  }
}

export default reducer
