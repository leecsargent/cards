import { connect } from 'react-redux';
import App from '../components/App';
import {
  deal,
  requestDeck,
  addCardToHand,
  toggleStand,
  toggleSetting,
} from '../actions/cards';
import {
  getIsRequesting,
  getDeckId,
  getRemaining,
  getCardsByPlayer,
  getScoreByPlayer,
  getIsWaitingForPlayer,
  getIsStandingByPlayer,
  getCardsLoaded,
  getWinner,
  getIsPlayerStandDisabled,
  getHasEnded,
  getDeckCount,
  getAceValue,
  getAceOptions,
  getSelectedAceOption,
} from '../selectors/cards';

const mapStateToProps = state => {
  return {
    remaining: getRemaining(state),
    requesting: getIsRequesting(state),
    deckId: getDeckId(state),
    playerCards: getCardsByPlayer('player')(state),
    dealerCards: getCardsByPlayer('dealer')(state),
    isWaitingForPlayer: getIsWaitingForPlayer(state),
    playerScore: getScoreByPlayer('player')(state),
    dealerScore: getScoreByPlayer('dealer')(state),
    isPlayerStanding: getIsStandingByPlayer('player')(state),
    isLoaded: getCardsLoaded(state),
    winner: getWinner(state),
    isPlayerStandDisabled: getIsPlayerStandDisabled(state),
    hasEnded: getHasEnded(state),
    deckCount: getDeckCount(state),
    aceValue: getAceValue(state),
    aceOptions: getAceOptions(state),
    selectedAceOption: getSelectedAceOption(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestDeck: params => dispatch(requestDeck(params)),
    deal: params => dispatch(deal(params)),
    addCardToHand: params => dispatch(addCardToHand(params)),
    toggleStand: () => dispatch(toggleStand()),
    toggleSetting: params => dispatch(toggleSetting(params)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
