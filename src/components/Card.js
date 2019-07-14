import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

class Card extends React.PureComponent {
  state = { visible: false, cardInHand: false };

  toggle = event => {
    const { addCardToHand, isDealer, id, disabled } = this.props;
    const player = isDealer ? 'dealer' : 'player';
    event.preventDefault();
    this.setState(
      prevState => {
        return {
          visible: true,
        };
      },
      () => {
        const { cardInHand } = this.state;
        if (!cardInHand && !disabled) {
          addCardToHand({
            player,
            id,
          });
          this.setState({ cardInHand: true });
        }
      },
    );
  };

  render() {
    const { value, blackjackValue, disabled } = this.props;
    const { visible } = this.state;
    const outerStyles = [
      styles.card,
      ...(disabled || visible ? [styles.front] : []),
    ].join(' ');

    return (
      <button
        className={outerStyles}
        onClick={this.toggle}
        disabled={this.props.disabled}
      >
        {disabled || visible ? (
          <div className={styles.front}>
            <div>card: {value}</div>
            <div>blackjack: {blackjackValue}</div>
          </div>
        ) : (
          <div className={styles.back}>hidden</div>
        )}
      </button>
    );
  }
}

Card.propTypes = {
  blackjackValue: PropTypes.number.isRequired,
  addCardToHand: PropTypes.func,
  isDealer: PropTypes.bool,
  disabled: PropTypes.bool,
};

Card.defaultProps = {
  isDealer: false,
  disabled: false,
};

export default Card;
