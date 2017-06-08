import { myReducer } from './reducer';
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';


const reducer = combineReducers({
  myReducer,
  form: reduxFormReducer,
})
 const store = createStore(
   reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

 export default store;
