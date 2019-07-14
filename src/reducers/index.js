import { combineReducers } from 'redux';
import cards from './cards';
import settings from './settings';
import players from './players';

export default combineReducers({
  cards,
  players,
  settings,
});
