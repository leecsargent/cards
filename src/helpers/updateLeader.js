const validScore = score => (score <= 21 ? score : -1);

export default ({ dealer, player }) => {
  const validScores = [validScore(dealer.score), validScore(player.score)];
  const leader =
    validScores[0] === validScores[1]
      ? null
      : validScores[0] > validScores[1]
      ? 'dealer'
      : 'player';
  const end =
    dealer.score >= 21 ||
    player.score >= 21 ||
    (dealer.stand && player.stand) ||
    (player.stand && validScores[0] > validScores[1]);

  return {
    leader,
    end,
  };
};
