export default cards => {
  return cards.reduce((acc, curr) => {
    return acc + curr.blackjackValue;
  }, 0);
};
