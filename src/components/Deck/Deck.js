import React from 'react';
import PropTypes from 'prop-types';

const Deck = ({ remaining, deckCount }) => {
  return (
    <div>
      <p className="description-text">
        {remaining} cards remaining in {deckCount}{' '}
        {`${deckCount > 1 ? 'decks' : 'deck'}.`}
      </p>
    </div>
  );
};

Deck.propTypes = {
  remaining: PropTypes.number.isRequired,
  deckCount: PropTypes.number.isRequired,
};

export default Deck;
