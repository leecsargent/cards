import cardValue from './cardValue';
import valueLabel from './valueLabel';
import uuid from 'uuid';

export default card => {
  const { value, ...rest } = card;
  return {
    blackjackValue: cardValue(value),
    valueLabel: valueLabel(value),
    id: uuid.v1(),
    value,
    ...rest,
  };
};
