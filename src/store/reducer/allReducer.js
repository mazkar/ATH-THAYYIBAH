import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { globalReducer } from './globalReducer'

export const allReducer = combineReducers({
  authReducer,
  globalReducer,
})
