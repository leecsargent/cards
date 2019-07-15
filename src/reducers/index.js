import { combineReducers } from 'redux';
import cards from './cards';
// this could have more stuff, like `settings`...
export default combineReducers({
  cards,
});
