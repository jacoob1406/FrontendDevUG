import gamesDatabase from './gamesDatabase';

gamesDatabase.getAllScores();

console.log(gamesDatabase.getAllUniqueTeams());

console.log(gamesDatabase.getScoreById('123'));
console.log(gamesDatabase.getScoreById('656'));
console.log(gamesDatabase.getGameById('123'));
gamesDatabase.deleteGame('123');
console.log(gamesDatabase.getGameById('123'));

console.log(gamesDatabase.getGameById('656').betterFans);

console.log(gamesDatabase.getAllFriendlyGames());

console.log(gamesDatabase.getGamesByTeam('Liverpool'));
console.log(gamesDatabase.getGamesByTeam('Man United'));
console.log(gamesDatabase.getGamesByTeam('Chelsea'));

console.log(gamesDatabase.getGameByIndex(1));
gamesDatabase.deleteGameByIndex(1);
console.log(gamesDatabase.getGameByIndex(1));

console.log(gamesDatabase.getAllHomeTeams());
console.log(gamesDatabase.getAllAwayTeams());

console.log(gamesDatabase.getGamesWithManyGoals());

console.log(gamesDatabase.getAllUniqueTeams());

console.log(gamesDatabase.getNumberOfGoals());
console.log(gamesDatabase.getAverageGoalsInGame());
