import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import { ReactComponent as Back } from './card_back.svg';

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
    const { disabled, suit, valueLabel, classNames, style } = this.props;
    const { visible } = this.state;
    const outerStyles = [
      ...classNames,
      styles.card,
      styles[suit.toLowerCase()],
      ...(disabled || visible ? [styles.front] : [styles.back]),
    ].join(' ');

    return (
      <button
        style={style}
        className={outerStyles}
        onClick={this.toggle}
        disabled={this.props.disabled}
      >
        {disabled || visible ? (
          <div className={styles.frontInner}>
            <span className={styles.labelTop}>{valueLabel}</span>
            <span className={styles.labelBottom}>{valueLabel}</span>
          </div>
        ) : (
          <div className={styles.backInner}>
            <Back />
          </div>
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
  classNames: PropTypes.array,
};

Card.defaultProps = {
  isDealer: false,
  disabled: false,
  classNames: [],
};

export default Card;
