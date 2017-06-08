const initialState = {
  name: 'Colin',
}

export const reducer = (state= initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return Object.assign({}, state, {
        name: action.name,
      })
    default:
      return state;
  }
}

export const setName = name => ({ type: 'SET_NAME', name})
