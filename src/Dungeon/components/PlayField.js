import React from 'react'
import Tile from './Tile'
import './PlayField.css'

/**
 * Expect arrar of array for field
 *
 * X X X X X → row • tile
 * X O O O X
 * X O O O O
 * X O O O X
 * X X X X X
 *
 */
export default ({ field }) => {
  return (
    <div className="PlayField-Container">
      <svg className="PlayField">
        {field && field.map((row, y) => row.map((tile, x) => <Tile key={`${x}-${y}`} x={x} y={y} type={tile} />))}
      </svg>
    </div>
  )
}
