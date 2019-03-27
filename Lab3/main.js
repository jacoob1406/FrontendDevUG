function FootballGame(homeTeam, awayTeam, scoreHome, scoreAway, isFriendly) {
  this.homeTeam = homeTeam;
  this.awayTeam = awayTeam;
  this.scoreHome = scoreHome;
  this.scoreAway = scoreAway;
  this.isFriendly = isFriendly;
}

FootballGame.prototype = {
  getHomeTeam: function() {
    return this.homeTeam;
  },
  getAwayTeam: function() {
    return this.awayTeam;
  },
};

FootballGame.prototype.goalHomeTeam = function() {
  return ++this.scoreHome;
};

FootballGame.prototype.goalAwayTeam = function() {
  return ++this.scoreAway;
};

FootballGame.prototype.getScore = function() {
  return (
    this.homeTeam +
    ' ' +
    this.scoreHome +
    ':' +
    this.scoreAway +
    ' ' +
    this.awayTeam
  );
};

function Derby(hTeam, aTeam, hScore, aScore, isFriendly, isDerby) {
  FootballGame.call(this, hTeam, aTeam, hScore, aScore, isFriendly);
  this.isDerby = isDerby;
}

Derby.prototype.getHomeTeam = function() {
  return this.homeTeam;
};

var game1 = new FootballGame('Arka Gdynia', 'Lech Poznań', 3, 1, false);
console.log(game1.getScore());
console.log(
  'Gooooooooooaaalllll!!!',
  game1.goalHomeTeam(),
  ' goal for ',
  game1.getHomeTeam(),
);
console.log(game1.getScore());

var merseysideGame = new Derby('Everton', 'Liverpool', 7, 0, false, true);
console.log(merseysideGame.getHomeTeam());

var footballMatches = {};

footballMatches = (function() {
  var gamesInterface = {
    games: [],

    addGame: function(game) {
      gamesInterface.games.push(game);
    },
    deleteGame: function(game) {
      const gameIndex = gamesInterface.games.indexOf(game);
      if (gameIndex >= 0) {
        gamesInterface.games.splice(gameIndex, 1);
      } else {
        console.error('There is no such game like ', game);
      }
    },
    getScoreByIndex: function(index) {
      return (
        gamesInterface.games[index].homeTeam +
        ' ' +
        gamesInterface.games[index].scoreHome +
        ' : ' +
        gamesInterface.games[index].scoreAway +
        ' ' +
        gamesInterface.games[index].awayTeam
      );
    },
    getAllScores: function() {
      function forEachGameWorker(game, index) {
        console.log(gamesInterface.getScoreByIndex(index));
      }
      return gamesInterface.games.forEach(forEachGameWorker);
    },
    getAllFriendlyGames: function() {
      return gamesInterface.games.filter(function(game) {
        return game.isFriendly === true;
      });
    },
    getGamesByTeam: function(team) {
      return gamesInterface.games.filter(function(game) {
        return game.homeTeam === team || game.awayTeam === team;
      });
    },
    scoreGoal: function(gameIndex, isHomeTeam) {
      if (isHomeTeam) {
        return ++gamesInterface.games[gameIndex].scoreHome;
      } else {
        return ++gamesInterface.games[gameIndex].scoreAway;
      }
    },
  };
  return gamesInterface;
})();

footballMatches.addGame(new FootballGame('Man Utd', 'Chelsea', 3, 0, false));
footballMatches.addGame(new FootballGame('Man Utd', 'Liverpool', 1, 0, false));
footballMatches.addGame(new FootballGame('Man Utd', 'Everton', 3, 2, false));
footballMatches.addGame(new FootballGame('Man Utd', 'Arka Gdynia', 3, 3, true));
footballMatches.getAllScores();
console.log(footballMatches.getAllFriendlyGames());
console.log(footballMatches.getGamesByTeam('Man Utd'));
console.log(footballMatches.getScoreByIndex(3));
footballMatches.scoreGoal(3, true);
footballMatches.scoreGoal(3, true);
footballMatches.scoreGoal(3, false);
console.log(footballMatches.getScoreByIndex(3));
