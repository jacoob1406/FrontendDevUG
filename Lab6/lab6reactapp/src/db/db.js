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

  deleteGameByIndex(index) {
    this._games.splice(index, 1);
  }

  getGameByIndex(index) {
    return this._games[index];
  }

  getScoreById(id) {
    return this.getGameById(id).score;
  }

  getAllFriendlyGames() {
    return this._games.filter(game => game._isFriendly);
  }

  getAllHomeTeams() {
    return this._games.map(game => game._homeTeam).join(', ');
  }

  getAllAwayTeams() {
    return this._games.map(game => game._awayTeam).join(', ');
  }

  getGamesWithManyGoals() {
    return this._games.filter(game => game._scoreAway + game._scoreHome >= 5);
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
    const uniqueTeams = [...new Set([...homeTeams, ...awayTeams])];
    return uniqueTeams.join(', ');
  }

  getNumberOfGoals() {
    const scoreHomeTeams = this._games.map(el => el._scoreHome);
    const scoreAwayTeams = this._games.map(el => el._scoreAway);
    return [...scoreHomeTeams, ...scoreAwayTeams].reduce((a, b) => a + b, 0);
  }

  getAverageGoalsInGame() {
    return (this.getNumberOfGoals() / this._games.length).toFixed(2);
  }
}

export default FootballGamesDatabase;
