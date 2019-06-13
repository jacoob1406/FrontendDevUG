import FootballGamesDatabase from './db';
import { FootballGame } from './classes/FootballGame';
import { DerbyGame } from './classes/DerbyGame';

const gamesDatabase = new FootballGamesDatabase();

gamesDatabase.addGame(new FootballGame('Man United', 'Man City', 3, 0, false));
gamesDatabase.addGame(new FootballGame('Man United', 'Arsenal', 4, 1, false));
gamesDatabase.addGame(new FootballGame('Man United', 'Chelsea', 0, 0, true));
gamesDatabase.addGame(new FootballGame('Barcelona', 'Liverpool', 3, 2, false));
gamesDatabase.addGame(new FootballGame('Tottenham', 'Wolves', 0, 2, false));
gamesDatabase.addGame(new FootballGame('Cracovia', 'Legia', 5, 2, false));
gamesDatabase.addGame(new FootballGame('Barcelona', 'Liverpool', 3, 2, true));
gamesDatabase.addGame(
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
gamesDatabase.addGame(
  new DerbyGame(
    'Wisła Kraków',
    'Cracovia',
    0,
    2,
    false,
    '656',
    'Derby Krakowa',
    'Cracovia'
  )
);

export default gamesDatabase;
