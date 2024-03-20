/* eslint-disable prettier/prettier */
const initialState = {
  sidebarShow: true,
  theme: 'light',
}

// eslint-disable-next-line default-param-last
export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FOLD_SIDEBAR':
      return {
        ...state,
        sidebarShow: action.payload,
      }

    default:
      return state
  }
}
