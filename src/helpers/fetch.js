export default params => {
  const { deckId, count, deckCount } = params;
  const path =
    deckId === 'new'
      ? `shuffle/?deck_count=${deckCount}`
      : `draw/?count=${count}`;
  const endpoint = `https://deckofcardsapi.com/api/deck/${deckId}/${path}`;

  return fetch(endpoint);
};
