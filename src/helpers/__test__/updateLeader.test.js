import updateLeader from '../updateLeader';

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
  player: { score: 20 },
};

const dealerExceeds21 = {
  dealer: { score: 22 },
  player: { score: 19 },
};

const playerExceeds21 = {
  dealer: { score: 18 },
  player: { score: 22 },
};

const bothStandPlayerWins = {
  dealer: { score: 17, stand: true },
  player: { score: 20, stand: true },
};

const bothStandDealerWins = {
  dealer: { score: 18, stand: true },
  player: { score: 17, stand: true },
};

const playerStandsAndDealerWins = {
  dealer: { score: 18, stand: false },
  player: { score: 17, stand: true },
};

describe('updateLeader', () => {
  it('should end with player as winner when player is at 21 and dealer is not', () => {
    expect(updateLeader(playerWins)).toStrictEqual({
      end: true,
      leader: 'player',
    });
  });

  it('should end with dealer as winner when dealer is at 21 and player is not', () => {
    expect(updateLeader(dealerWins)).toStrictEqual({
      end: true,
      leader: 'dealer',
    });
  });

  it('should end with player as winner when dealer exceeds 21 and player does not', () => {
    expect(updateLeader(dealerExceeds21)).toStrictEqual({
      end: true,
      leader: 'player',
    });
  });

  it('should end with player as winner when both stand and player is higher, not above 21', () => {
    expect(updateLeader(bothStandPlayerWins)).toStrictEqual({
      end: true,
      leader: 'player',
    });
  });

  it('should end with player as winner when both stand and player is higher, not above 21', () => {
    expect(updateLeader(bothStandDealerWins)).toStrictEqual({
      end: true,
      leader: 'dealer',
    });
  });

  it('should end with dealer as winner when player stands and dealer is higher, not above 21', () => {
    expect(updateLeader(playerStandsAndDealerWins)).toStrictEqual({
      end: true,
      leader: 'dealer',
    });
  });

  it('should end with dealer as winner when player exceeds 21 and dealer does not', () => {
    expect(updateLeader(playerExceeds21)).toStrictEqual({
      end: true,
      leader: 'dealer',
    });
  });

  it('should end with dealer as winner when player exceeds 21 and dealer does not', () => {
    expect(updateLeader(playerExceeds21)).toStrictEqual({
      end: true,
      leader: 'dealer',
    });
  });
});
