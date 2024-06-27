/* eslint-disable no-underscore-dangle */

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (new.target !== Building
      && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      this.evacuationWarningMessage();
    }
  }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
  /* eslint-disable class-methods-use-this */

  get sqft() {
    return this._sqft;
  }
}
