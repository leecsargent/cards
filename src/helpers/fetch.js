export default params => {
  const { deckId, count } = params;
  const path =
    deckId === 'new' ? 'shuffle/?deck_count=6' : `draw/?count=${count}`;
  const endpoint = `https://deckofcardsapi.com/api/deck/${deckId}/${path}`;

  return fetch(endpoint);
};
