/* eslint-disable prettier/prettier */
const initialState = {
  user: {},
  token: '',
}

// eslint-disable-next-line default-param-last
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      }

    default:
      return state
  }
}
