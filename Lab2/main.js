var games = [
  {
    id: 1,
    homeTeam: 'Arka Gdynia',
    awayTeam: 'Manchester United',
    scoreHomeTeam: {
      numOfGoals: 1,
      goalScorers: [{ player: 'Siemaszko', min: 89 }],
    },
    scoreAwayTeam: {
      numOfGoals: 2,
      goalScorers: [
        { player: 'Rashford', min: 60 },
        { player: 'Lukaku', min: 4 },
      ],
    },
    isFriendlyGame: false,
  },
  {
    id: 2,
    homeTeam: 'Lech Poznań',
    awayTeam: 'Legia Warszawa',
    scoreHomeTeam: {
      numOfGoals: 0,
      goalScorers: [],
    },
    scoreAwayTeam: {
      numOfGoals: 2,
      goalScorers: [],
    },
    isFriendlyGame: false,
  },
  {
    id: 3,
    homeTeam: 'Real Madryt',
    awayTeam: 'Atletico Madryt',
    scoreHomeTeam: {
      numOfGoals: 0,
      goalScorers: [],
    },
    scoreAwayTeam: {
      numOfGoals: 3,
      goalScorers: [
        { player: 'Koke', min: 1 },
        { player: 'Koke', min: 4 },
        { player: 'Morata', min: 54 },
      ],
    },
    isFriendlyGame: true,
  },
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

function getGameByTeam(team) {
    return games.filter(function(game) {
      return game.homeTeam === team || game.awayTeam === team;
    });
}

function forEachGameWorker(el, index) {
  console.log(getScoreByIndex(index));
}

function getAllScores() {
  return games.forEach(forEachGameWorker);
}


function addGame(team1, score1, team2, score2, isFriendly) {
  var newGame = {
    id: games.length,
    homeTeam: team1,
    awayTeam: team2,
    scoreHomeTeam: {
      numOfGoals: score1,
      goalScorers: [],
    },
    scoreAwayTeam: {
      numOfGoals: score2,
      goalScorers: [],
    },
    isFriendlyGame: isFriendly,
  };
  games.push(newGame);
}

addGame('FC Barcelona', 2, 'PSG', 1, false);

function removeGameByIndex(index) {
  games.splice(index, 1);
}

removeGameByIndex(3);
