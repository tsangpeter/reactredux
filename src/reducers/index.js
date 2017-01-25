// A reducer is a fucntion that returns a piece of the application state

import { combineReducers } from 'redux';
import RecipesReducer from './reducer_recipes';

const rootReducer = combineReducers({
  recipes: RecipesReducer
});

export default rootReducer;
