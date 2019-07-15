import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import styles from './App.module.scss';
import Deck from './Deck';

export default class App extends React.Component {
  static propTypes = {
    deal: PropTypes.func.isRequired,
    requestDeck: PropTypes.func.isRequired,
    toggleStand: PropTypes.func.isRequired,
    isWaitingForPlayer: PropTypes.bool.isRequired,
    requesting: PropTypes.bool.isRequired,
    remaining: PropTypes.number,
    playerCards: PropTypes.shape({
      hand: PropTypes.array.isRequired,
      next: PropTypes.array.isRequired,
    }).isRequired,
    dealerCards: PropTypes.shape({
      hand: PropTypes.array.isRequired,
      next: PropTypes.array.isRequired,
    }).isRequired,
    playerScore: PropTypes.number.isRequired,
    dealerScore: PropTypes.number.isRequired,
    isPlayerStanding: PropTypes.bool.isRequired,
    winner: PropTypes.string,
    isPlayerStandDisabled: PropTypes.bool.isRequired,
    hasEnded: PropTypes.bool.isRequired,
    deckCount: PropTypes.number.isRequired,
  };

  onClickDeal = event => {
    event.preventDefault();
    const { requestDeck, deal, deckId, isLoaded } = this.props;

    if (!isLoaded) {
      return deal({ deckId });
    }
    return requestDeck();
  };

  onClickStart = event => {
    event.preventDefault();
    const { deal } = this.props;
    deal();
  };

  disable = type => {
    const { isLoaded, hasEnded } = this.props;
    return type === 'start' ? isLoaded && !hasEnded : !isLoaded;
  };

  handleClick = type => event => {
    const { requestDeck, deal } = this.props;
    event.preventDefault();

    if (type === 'start') {
      return requestDeck();
    }

    return deal();
  };

  reset = event => {
    event.preventDefault();
  };

  toggleStand = () => {
    const { toggleStand } = this.props;
    toggleStand();
  };

  render() {
    const {
      playerCards,
      dealerCards,
      requesting,
      deckId,
      isLoaded,
      remaining,
      isWaitingForPlayer,
      playerScore,
      dealerScore,
      isPlayerStanding,
      winner,
      isPlayerStandDisabled,
      hasEnded,
      deckCount,
      ...rest
    } = this.props;

    return (
      <div className={styles.app}>
        <div className={styles.inner}>
          <button
            className="button"
            disabled={this.disable('start')}
            onClick={this.handleClick('start')}
          >
            START
          </button>
          <button
            className="button"
            disabled={this.disable('deal') || isWaitingForPlayer || hasEnded}
            onClick={this.handleClick('deal')}
          >
            DEAL
          </button>
          <p className="description-text">
            Dealer stands on 17 and draws to 16.
          </p>
          <div className={styles.players}>
            <Player
              hand={playerCards.hand}
              next={playerCards.next}
              score={playerScore}
              {...rest}
            />
            <Player
              isDealer
              hand={dealerCards.hand}
              next={dealerCards.next}
              score={dealerScore}
              {...rest}
            />
          </div>
          {isLoaded && <Deck remaining={remaining} deckCount={deckCount} />}

          <p>{requesting ? 'Loading' : ''}</p>
          {!!playerScore && (
            <div>
              <input
                disabled={isWaitingForPlayer || isPlayerStandDisabled}
                type="checkbox"
                name="stand"
                value="stand"
                checked={isPlayerStanding}
                onChange={this.toggleStand}
              />{' '}
              <label htmlFor="stand" className="description-text">
                Stand (then deal)
              </label>
            </div>
          )}
          {hasEnded && (
            <div>
              <p>{winner ? `${winner} wins.` : 'Draw'}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
