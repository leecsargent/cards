export default data => {
  const { deck_id: deckId, cards, remaining } = data;
  return {
    deckId,
    cards,
    remaining,
  };
};
