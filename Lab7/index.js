const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const FootballGamesDatabase = require('./db/db');
const FootballGame = require('./db/classes/FootballGame');

app.use(cors());
// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
//   );
app.use(bodyParser.json());
  
const PORT = 4000;

const matches = new FootballGamesDatabase();

function prepareRequestParameter(param) {
  return param.split('-').join(' ');
}

app.get('/api/matches', (req, res) => res.send(matches));

app.get('/api/matches/:id', (req, res) => {
  res.send(matches.getGameById(req.params.id));
});

app.get('/api/matches/team/:team', (req, res) => {
  const team = prepareRequestParameter(req.params.team);
  res.send(matches.getGamesByTeam(team));
});

app.post('/api/matches/new', (req, res) => {
  const homeTeam = req.body.homeTeam;
  const awayTeam = req.body.awayTeam;
  const scoreHome = req.body.scoreHome;
  const scoreAway = req.body.scoreAway;
  const isFriendly = req.body.isFriendly || false;
  const game = new FootballGame(
    homeTeam,
    awayTeam,
    scoreHome,
    scoreAway,
    isFriendly
  );
  matches.addGame(game);

  res.status(201).send({
    success: 'true',
    message: 'Game was added!',
    game
  });
});

app.delete('/api/matches/delete/:id', (req, res) => {
  const id = req.params.id;
  if (matches.getAllGames().find(game => game._id === id)) {
    matches.deleteGame(id);
    res.status(201).send({
      success: 'true',
      message: `Game with id ${id} was successfully deleted!`
    });
  } else {
    res.send({
      success: 'false',
      message: `There is no game with such id as ${id}!`
    });
  }
});

app.put('/api/matches/:id', (req, res) => {
  const id = req.params.id;
  const scoreHome = req.body.scoreHome;
  const scoreAway = req.body.scoreAway;
  if (matches.getAllGames().find(game => game._id === id)) {
    matches.setScore(id, scoreHome, scoreAway);
    res.status(201).send({
      success: 'true',
      message: `Score for game with id ${id} was successfully updated!`
    });
  } else {
    res.send({
      success: 'false',
      message: `There is no game with such id as ${id}!`
    });
  }
});

app.listen(PORT, () =>
  console.log(`Football matches app is running on port ${PORT}`)
);
