import updateLeader from "../updateLeader";

const playerWins = {
  player: {
    score: 21,
  },
  dealer: {
    score: 20,
  },
};

const dealerWins = {
  dealer: { score: 21 },
  player: { score: 20},
  end: true,
};

const dealerExceeds21 = {
  dealer: { score: 22 },
  player: { score: 19},
  end: true,
};

const playerExceeds21 = {
  dealer: { score: 18 },
  player: { score: 22},
  end: true,
};

describe('updateLeader', () => {
  it('should end with player as winner when player score beats dealer score', () => {
    expect(updateLeader(playerWins)).toStrictEqual({ end: true, leader: 'player' });
  });

  it('should end with dealer as winner when dealer score beats player score', () => {
    expect(updateLeader(dealerWins)).toStrictEqual({ end: true, leader: 'dealer' });
  });

  it('should end with player as winner when dealer exceeds 21 and player does not', () => {
    expect(updateLeader(dealerExceeds21)).toStrictEqual({ end: true, leader: 'player' });
  });

  it('should end with dealer as winner when player exceeds 21 and dealer does not', () => {
    expect(updateLeader(playerExceeds21)).toStrictEqual({ end: true, leader: 'dealer' });
  });
})
