var uuid = require('uuid/v4');

var games = [
  {
    id: uuid(),
    homeTeam: 'Arka Gdynia',
    awayTeam: 'Manchester United',
    scoreHomeTeam: {
      numOfGoals: 1,
      goalScorers: [{ player: 'Siemaszko', min: 89 }]
    },
    scoreAwayTeam: {
      numOfGoals: 2,
      goalScorers: [
        { player: 'Rashford', min: 60 },
        { player: 'Lukaku', min: 4 }
      ]
    },
    isFriendlyGame: false
  },
  {
    id: uuid(),
    homeTeam: 'Lech Poznań',
    awayTeam: 'Legia Warszawa',
    scoreHomeTeam: {
      numOfGoals: 0,
      goalScorers: []
    },
    scoreAwayTeam: {
      numOfGoals: 2,
      goalScorers: []
    },
    isFriendlyGame: false
  },
  {
    id: 999,
    homeTeam: 'Real Madryt',
    awayTeam: 'Atletico Madryt',
    scoreHomeTeam: {
      numOfGoals: 0,
      goalScorers: []
    },
    scoreAwayTeam: {
      numOfGoals: 3,
      goalScorers: [
        { player: 'Koke', min: 1 },
        { player: 'Koke', min: 4 },
        { player: 'Morata', min: 54 }
      ]
    },
    isFriendlyGame: true
  }
];

function getScoreByIndex(index) {
  return (
    games[index].homeTeam +
    ' ' +
    games[index].scoreHomeTeam.numOfGoals +
    ' : ' +
    games[index].scoreAwayTeam.numOfGoals +
    ' ' +
    games[index].awayTeam
  );
}

function getScoreById(id) {
  var team = games.filter(function(game) {
    return game.id === id;
  });
  return (
    team[0].homeTeam +
    ' ' +
    team[0].scoreHomeTeam.numOfGoals +
    ' : ' +
    team[0].scoreAwayTeam.numOfGoals +
    ' ' +
    team[0].awayTeam
  );
}

function getAllFriendlyGames() {
  return games.filter(function(game) {
    return game.isFriendlyGame === true;
  });
}

function getGamesByTeam(team) {
  return games.filter(function(game) {
    return game.homeTeam === team || game.awayTeam === team;
  });
}

function getAllScores(allGames = games) {
  function forEachGameWorker(game, index) {
    console.log(getScoreByIndex(index));
  }
  return allGames.forEach(forEachGameWorker);
}

function scoreGoal(index, isHomeTeam, minute, player) {
  if (isHomeTeam) {
    games[index].scoreHomeTeam.numOfGoals++;
    games[index].scoreHomeTeam.goalScorers.push({
      player: player,
      min: minute
    });
  } else {
    games[index].scoreAwayTeam.numOfGoals++;
    games[index].scoreAwayTeam.goalScorers.push({
      player: player,
      min: minute
    });
  }
}

function addGame(team1, score1, team2, score2, isFriendly) {
  var newGame = {
    id: uuid(),
    homeTeam: team1,
    awayTeam: team2,
    scoreHomeTeam: {
      numOfGoals: score1,
      goalScorers: []
    },
    scoreAwayTeam: {
      numOfGoals: score2,
      goalScorers: []
    },
    isFriendlyGame: isFriendly
  };
  games.push(newGame);
}

function removeGameByIndex(index) {
  games.splice(index, 1);
}

// TESTS

console.log('It should be 3: ', games.length);
addGame('FC Barcelona', 2, 'PSG', 1, false);
console.log('It should be 4: ', games.length);
removeGameByIndex(3);
console.log('It should be 3 again: ', games.length);

console.log(games[1]);
scoreGoal(1, true, 25, 'Gytkjaer');
console.log(games[1]);

console.log(getAllFriendlyGames());

console.log(getScoreById(999));

addGame('Arka Gdynia', 5, 'FC Barcelona', 1, false);
scoreGoal(3, true, 88, 'Janota');
console.log(getScoreByIndex(3));

console.log(getGamesByTeam('Arka Gdynia'));

console.log(getAllScores(getGamesByTeam('Arka Gdynia')));