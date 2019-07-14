import cardValue from './cardValue';
import uuid from 'uuid';

export default card => {
  const { value, ...rest } = card;
  return {
    blackjackValue: cardValue(value),
    id: uuid.v1(),
    value,
    ...rest,
  };
};
