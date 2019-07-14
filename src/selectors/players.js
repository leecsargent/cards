import { createSelector } from 'reselect';

const playersState = ({ players }) => players;

export const getPlayers = createSelector(
  playersState,
  players => players.players,
);
