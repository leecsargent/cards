import { connect } from 'react-redux';
import App from '../components/App';
import {
  deal,
  requestDeck,
  addCardToHand,
  toggleStand,
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestDeck: params => dispatch(requestDeck(params)),
    deal: params => dispatch(deal(params)),
    addCardToHand: params => dispatch(addCardToHand(params)),
    toggleStand: () => dispatch(toggleStand()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
