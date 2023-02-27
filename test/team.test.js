const { allForeignPlayers, wicketKeeperCount } = require('./cricket')

describe('Royal Challenger Bangalore (RCB)', () => {

  test('team has only 4 foreign players', () => {
    expect(allForeignPlayers()).toBe(4)
  })

  test('team has atleast one wicket keeper', () => {
    expect(wicketKeeperCount()).toBeGreaterThanOrEqual(1)
  })

})