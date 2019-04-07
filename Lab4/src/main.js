import { FootballGame } from './classes/FootballGame';

const game1 = new FootballGame('Man United', 'Man City', 3, 0, false);
const game2 = new FootballGame('Man United', 'Arsenal', 4, 1, false);
const game3 = new FootballGame('Man United', 'Chelsea', 0, 0, true);

console.log(game1.score);
console.log(game2.score);
game3.scoreGoalHomeTeam();
game3.scoreGoalHomeTeam();
game3.scoreGoalAwayTeam();
console.log(game3.score);
