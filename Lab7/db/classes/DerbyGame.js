const FootballGame = require('./FootballGame');
const uuid = require('uuid');

class DerbyGame extends FootballGame {
  constructor(
    homeTeam,
    awayTeam,
    scoreHome,
    scoreAway,
    isFriendly,
    id = uuid(),
    nameOfDerby,
    betterFans
  ) {
    super(homeTeam, awayTeam, scoreHome, scoreAway, isFriendly, id);
    this._nameOfDerby = nameOfDerby;
    this._betterFans = betterFans;
  }

  set nameOfDerby(name) {
    this._nameOfDerby = name;
  }

  get nameOfDerby() {
    return this._nameOfDerby;
  }

  set betterFans(fans) {
    this._betterFans = fans;
  }

  get betterFans() {
    return this._betterFans;
  }
}

module.exports = DerbyGame;
