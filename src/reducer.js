const initialState = {
  // data: {
  //   name: 'Hello'
  // }
}

export const myReducer = (state= initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, {
          name: action.name
        }),
      })
    default:
      return state;
  }
}

export const setName = name => ({ type: 'SET_NAME', name})
