import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Player from '../Player';
import styles from './App.module.scss';
import Deck from '../Deck';

export default class App extends React.Component {
  static propTypes = {
    deal: PropTypes.func.isRequired,
    requestDeck: PropTypes.func.isRequired,
    toggleStand: PropTypes.func.isRequired,
    toggleSetting: PropTypes.func.isRequired,
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
    aceValue: PropTypes.string.isRequired,
    aceOptions: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    selectedAceOption: PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
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
    const { requestDeck, deal, toggleStand } = this.props;
    event.preventDefault();

    if (type === 'start') {
      return requestDeck();
    }

    if (type === 'stand') {
      return toggleStand();
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

  toggleSetting = field => data => {
    const { toggleSetting } = this.props;
    toggleSetting({ field: field, value: data.value });
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
      aceValue,
      aceOptions,
      selectedAceOption,
      ...rest
    } = this.props;

    return (
      <div className={styles.app}>
        <div className={styles.inner}>
          <label htmlFor="aceValue">Ace Value: {`${aceValue === '1' ? '1' : '1 or 11'}`}</label>
          <Select
            isDisabled={isLoaded && !hasEnded}
            value={selectedAceOption}
            name="aceValue"
            className={styles.select}
            classNamePrefix="react-select"
            onChange={this.toggleSetting('aceValue')}
            options={aceOptions}
          />
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
          <button
            className="button"
            disabled={
              isWaitingForPlayer ||
              isPlayerStandDisabled ||
              hasEnded ||
              !isLoaded ||
              !playerScore
            }
            onClick={this.handleClick('stand')}
          >
            {`${isPlayerStanding ? 'STAY' : 'STAND '}`}
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
