import * as tileTypes from './tileTypes'
import randBetween from './randBetween'

const tileEnum = Object.keys(tileTypes).map((t) => tileTypes[t])

class Dungeon {
  constructor (config) {
    this.createField(32, 18)
    this.addRoom(3, 3, 5, 5)
  }

  createField (w, h) {
    this.field = []

    for (let hi = 0; hi < h; hi++) {
      this.field[hi] = []
      for (let wi = 0; wi < w; wi++) {
        this.field[hi][wi] = 0
      }
    }
  }

  addRoom (x, y, w, h) {
    if (
      this.field.length - y - h < 0 &&
      this.field[0].length - x- w < 0
    ) {
      console.warn('Not enough space for room')
      return
    }

    let endY = y + h
    let endX = x + w

    for (let iY = y; iY < endY; iY++) {
      for (let iX = x; iX < endX; iX++) {
        if (
          (iY === y || iY === y + h - 1) ||
          (iX === x || iX === x + w - 1)
        ) {
          this.field[iY][iX] = 1 // wall
        } else {
          this.field[iY][iX] = 2 // floor
        }
      }
    }
  }

  getField () {
    console.log(this.field)
    return this.field.map((row) => row.map((tile) => tileEnum[tile]))
  }
}

export const defaultConfig = {
  roomMin: 5,
  roomMax: 5,
}

export default (config = defaultConfig) => new Dungeon(config)
