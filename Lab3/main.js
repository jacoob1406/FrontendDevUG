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
  }
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

function Derby(hTeam, aTeam, hScore, aScore, isFriendly, derbyName) {
  FootballGame.call(this, hTeam, aTeam, hScore, aScore, isFriendly);
  this.derbyName = derbyName;
}

Derby.prototype.getHomeTeam = function() {
  return this.homeTeam;
};

Derby.prototype.getDerbyName = function() {
  return this.derbyName;
};

// TEST FootballGame and Derby
var game1 = new FootballGame('Arka Gdynia', 'Lech Poznań', 3, 1, false);
console.log(game1.getScore());
console.log(
  'Gooooooooooaaalllll!!!',
  game1.goalHomeTeam(),
  ' goal for ',
  game1.getHomeTeam()
);
console.log(game1.getScore());

var merseysideGame = new Derby(
  'Everton',
  'Liverpool',
  7,
  0,
  false,
  'Merseyside Derby'
);
console.log(merseysideGame.getHomeTeam());
console.log(merseysideGame.getDerbyName());

// DB
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

    deleteGameByIndex: function(index) {
      gamesInterface.games.splice(index, 1);
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

    getGamesWithManyGoals: function() {
      return gamesInterface.games.filter(function(game) {
        return game.scoreAway + game.scoreHome >= 5;
      });
    },

    getAllHomeTeams: function() {
      return gamesInterface.games
        .map(function(game) {
          return game.homeTeam;
        })
        .join(', ');
    },

    getAllAwayTeams: function() {
      return gamesInterface.games
        .map(function(game) {
          return game.awayTeam;
        })
        .join(', ');
    },

    scoreGoal: function(gameIndex, isHomeTeam) {
      if (isHomeTeam) {
        return ++gamesInterface.games[gameIndex].scoreHome;
      } else {
        return ++gamesInterface.games[gameIndex].scoreAway;
      }
    }
  };
  return gamesInterface;
})();

footballMatches.addGame(new FootballGame('Man Utd', 'Chelsea', 3, 0, false));
footballMatches.addGame(new FootballGame('Man Utd', 'Liverpool', 1, 0, false));
footballMatches.addGame(new FootballGame('Man Utd', 'Everton', 3, 2, false));
footballMatches.addGame(new FootballGame('Man Utd', 'Arka Gdynia', 3, 3, true));
footballMatches.addGame(new FootballGame('Burnley', 'Wolves', 5, 3, false));
footballMatches.addGame(new FootballGame('Getafe', 'Alaves', 0, 0, false));
footballMatches.addGame(
  new Derby('Arka Gdynia', 'Lechia Gdańsk', 3, 1, false, 'Derby Trójmiasta')
);
footballMatches.addGame(
  new Derby('Man Utd', 'Liverpool', 2, 1, false, 'English Derby')
);
footballMatches.addGame(
  new Derby('Wisła Kraków', 'Cracovia', 0, 1, false, 'Derby Krakowa')
);

footballMatches.getAllScores();
console.log(footballMatches.getAllFriendlyGames());
console.log(footballMatches.getGamesByTeam('Man Utd'));
console.log(footballMatches.getScoreByIndex(3));
footballMatches.scoreGoal(3, true);
footballMatches.scoreGoal(3, true);
footballMatches.scoreGoal(3, false);
console.log(footballMatches.getGamesWithManyGoals());
console.log(footballMatches.getAllAwayTeams());
console.log(footballMatches.getAllHomeTeams());
console.log(footballMatches.getScoreByIndex(3));

console.log(footballMatches.getScoreByIndex(2));
footballMatches.deleteGameByIndex(2);
console.log(footballMatches.getScoreByIndex(2));

(function imitateFootballGame() {
  var game = new FootballGame('Barcelona', 'Arka Gdynia', 0, 0, false);
  console.log(
    'Welcome to the super game where ',
    game.getHomeTeam(),
    ' will play against ',
    game.getAwayTeam()
  );
  game.goalAwayTeam();
  console.log(
    'And Siemaszko scoooooooorees, so the score is now ',
    game.getScore()
  );
  game.goalAwayTeam();
  console.log('And another one in 89 minute! Zarandia!');
  console.log("It's finished! Score: ", game.getScore());
})();
