import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './Hand.module.css';

const Hand = ({ hand }) => {
  return (
    <div className={styles.hand}>
      {hand.map(({ id, ...rest }) => {
        return <Card {...rest} id={id} key={id} disabled />;
      })}
    </div>
  );
};

Hand.propTypes = {
  hand: PropTypes.array.isRequired,
};

export default Hand;
