import { isNumeric } from './isNumeric';
export default (a, b) => {
  if ((a.value === 'ACE') > (b.value === 'ACE')) {
    return 1;
  }

  if ((a.value === 'ACE') < (b.value === 'ACE')) {
    return -1;
  }

  if (isNumeric(a.value) < isNumeric(b.value)) {
    return 1;
  }

  if (isNumeric(a.value) > isNumeric(b.value)) {
    return -1;
  }

  if (a.blackjackValue < b.blackjackValue) {
    return -1;
  }

  if (a.blackjackValue > b.blackjackValue) {
    return 1;
  }

  return 0;
};
