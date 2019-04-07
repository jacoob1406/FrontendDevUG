import { FootballGame } from '../main';

export class DerbyGame extends FootballGame {
  constructor(nameOfDerby, betterFans) {
    this._nameOfDerby = nameOfDerby;
    this._betterFans = betterFans;
  }

  set nameOfDerby(name) {
    this._nameOfDerby = name;
  }

  get nameOfDerby() {
    return this._nameOfDerby;
  }

  set betterFans(fans) {
    this._betterFans = fans;
  }

  get betterFans() {
    return this._betterFans;
  }
}
