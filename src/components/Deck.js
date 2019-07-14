import React from 'react';
import PropTypes from 'prop-types';

const Deck = ({ remaining }) => {
  return (
    <div>
      <p>here is the deck of {remaining} cards</p>
    </div>
  );
};

Deck.propTypes = {
  remaining: PropTypes.number.isRequired,
};

export default Deck;
