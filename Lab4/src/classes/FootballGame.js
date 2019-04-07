export class FootballGame {
  constructor(homeTeam, awayTeam, scoreHome, scoreAway, isFriendly) {
    this._homeTeam = homeTeam;
    this._awayTeam = awayTeam;
    this._scoreHome = scoreHome;
    this._scoreAway = scoreAway;
    this._isFriendly = isFriendly;
  }

  scoreGoalHomeTeam() {
    this._scoreHome += 1;
  }

  scoreGoalAwayTeam() {
    this._scoreAway += 1;
  }

  set homeTeam(team) {
    this._homeTeam = team;
  }

  set awayTeam(team) {
    this._awayTeam = team;
  }

  get homeTeam() {
    return this._homeTeam;
  }

  get awayTeam() {
    return this._awayTeam;
  }

  get score() {
    return `${this._homeTeam} ${this._scoreHome} : ${this._scoreAway} ${
      this._awayTeam
    }`;
  }
}
