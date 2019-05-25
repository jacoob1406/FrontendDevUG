const FootballGame = require('./classes/FootballGame');
const DerbyGame = require('./classes/DerbyGame');

class FootballGamesDatabase {
  constructor() {
    this._games = [];
    this.addGame(new FootballGame('Man United', 'Man City', 3, 0, false));
    this.addGame(new FootballGame('Man United', 'Arsenal', 4, 1, false));
    this.addGame(new FootballGame('Man United', 'Chelsea', 0, 0, true));
    this.addGame(new FootballGame('Barcelona', 'Liverpool', 3, 2, false));
    this.addGame(new FootballGame('Tottenham', 'Wolves', 0, 2, false));
    this.addGame(new FootballGame('Cracovia', 'Legia', 5, 2, false));
    this.addGame(new FootballGame('Barcelona', 'Liverpool', 3, 2, true));
    this.addGame(
      new DerbyGame(
        'Arka Gdynia',
        'Lechia Gdansk',
        3,
        2,
        false,
        '123',
        'Derby Trójmiasta',
        'ARKA'
      )
    );
  }

  getAllGames() {
    return this._games;
  }

  getGameById(id) {
    return (
      this._games.find(game => game._id === id) ||
      'There is no game with such ID!'
    );
  }

  setScore(id, scoreHome, scoreAway) {
    let game = this._games.find(game => game._id === id);
    if (game) {
      game._scoreHome = scoreHome;
      game._scoreAway = scoreAway;
    } else {
      return 'There is no game with such ID!';
    }
  }

  addGame(game) {
    this._games.push(game);
  }

  deleteGame(id) {
    this._games = this._games.filter(game => game._id !== id);
  }

  getAllFriendlyGames() {
    return this._games.filter(game => game._isFriendly);
  }

  getGamesByTeam(team) {
    return this._games.filter(
      game => game._homeTeam === team || game._awayTeam === team
    );
  }

  getAllScores() {
    this._games.forEach(game =>
      console.log(
        `${game._homeTeam} ${game._scoreHome} : ${game._scoreAway} ${
          game._awayTeam
        }`
      )
    );
  }

  getAllUniqueTeams() {
    const homeTeams = this._games.map(el => el._homeTeam);
    const awayTeams = this._games.map(el => el._awayTeam);
    const uniqueTeams = [...new Set([...homeTeams, awayTeams])];
    console.log(uniqueTeams.join(', '));
  }

  getNumberOfGoals() {
    const scoreHomeTeams = this._games.map(el => el._scoreHome);
    const scoreAwayTeams = this._games.map(el => el._scoreAway);
    return [...scoreHomeTeams, scoreAwayTeams].reduce((a, b) => a + b, 0);
  }
}

module.exports = FootballGamesDatabase;
