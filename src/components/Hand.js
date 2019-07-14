import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './Hand.module.css';
import getAngleStyles from '../helpers/getAngleStyles';

const Hand = ({ hand }) => {
  return (
    <div className={styles.hand}>
      {hand.map(({ id, ...rest }, index, array) => {
        console.log('index', index);
        console.log('count', array.length);
        const style = getAngleStyles(index);
        return (
          <Card
            {...rest}
            id={id}
            key={id}
            disabled
            className={styles.item}
            style={style}
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
