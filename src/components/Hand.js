import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './Hand.module.scss';

const Hand = ({ hand, classNames }) => {
  return (
    <div
      className={[
        styles.hand,
        styles[`fan-${hand.length}`],
        ...classNames,
      ].join(' ')}
    >
      {hand.map(({ id, ...rest }) => {
        return (
          <Card
            {...rest}
            id={id}
            key={id}
            disabled
            classNames={[styles.item]}
          />
        );
      })}
    </div>
  );
};

Hand.propTypes = {
  hand: PropTypes.array.isRequired,
};

export default Hand;
