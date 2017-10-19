import {
  tileEnum,
  TILE_VOID,
  TILE_WALL,
  TILE_CLEAR,
} from './tileTypes'
import randBetween from './randBetween'

class Dungeon {
  constructor (config) {
    this.createField(32, 18)
    this.addRoom(3, 3,
      randBetween(config.roomMin, config.roomMax),
      randBetween(config.roomMin, config.roomMax),
    )
    this.addRoom(3, 3, 3, 3)
  }

  createField (w, h) {
    this.field = []

    for (let hi = 0; hi < h; hi++) {
      this.field[hi] = []
      for (let wi = 0; wi < w; wi++) {
        this.field[hi][wi] = TILE_VOID
      }
    }
  }

  addRoom (x, y, w, h) {
    // const tilesTaken = [] // TODO: Can be used for intersection - save [ri][ti]
    const rowsWithCollisions = this.field.filter((row, ri) =>
      // If a new box is requested in a row, loop through it's tiles.
      // For each requested spot, add the tile type number. If it's VOID (0),
      // nothing will be added and this row will be clear for placement.
      (ri >= y) && (ri <= y + h) && row.reduce((tilesInRange, tile, ti) =>
        tilesInRange + ((ti >= x) && (ti <= x + w) ? tile : 0)
      )
    ).length

    if (rowsWithCollisions) {
      console.warn(`Not enough space for this room (x:${x}, y:${y}, w:${w}, h:${h})`)
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
          this.field[iY][iX] = TILE_WALL
        } else {
          this.field[iY][iX] = TILE_CLEAR
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
  roomMin: 3,
  roomMax: 9,
}

export default (config = defaultConfig) => new Dungeon(config)
