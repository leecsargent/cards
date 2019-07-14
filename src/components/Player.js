import React from 'react';
import PropTypes from 'prop-types';
import Hand from './Hand';
import Card from './Card';
import styles from './Player.module.scss';

class Player extends React.Component {
  addCardToHand = () => {};
  render() {
    const { isDealer, hand, next, addCardToHand, score } = this.props;
    return (
      <div className={styles.player}>
        <h2>{isDealer ? 'Dealer' : 'Player'}</h2>
        <h3>Score: {score}</h3>
        {hand && !!hand.length && (
          <Hand hand={hand} player={isDealer ? 'dealer' : 'player'} />
        )}

        {next &&
          !!next.length &&
          next.map(card => (
            <Card
              {...card}
              key={card.id}
              addCardToHand={addCardToHand}
              isDealer={isDealer}
            />
          ))}
      </div>
    );
  }
}

Player.propTypes = {
  isDealer: PropTypes.bool,
  hand: PropTypes.array.isRequired,
  next: PropTypes.array,
};

Player.defaultProps = {
  isDealer: PropTypes.false,
  next: [],
};

export default Player;
