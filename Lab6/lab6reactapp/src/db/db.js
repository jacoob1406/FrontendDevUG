class FootballGamesDatabase {
  constructor() {
    this._games = [];
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

export default FootballGamesDatabase;
