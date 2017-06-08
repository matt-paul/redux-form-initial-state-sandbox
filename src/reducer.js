
export const myReducer = (state= {}, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, {
          name: action.name
        }),
      })
      case 'LOAD_NAME':
        return {
          data: action.data
        }
    default:
      return state;
  }
}

export const setName = name => ({ type: 'SET_NAME', name})
export const loadName = data => ({ type: 'LOAD_NAME', data})
