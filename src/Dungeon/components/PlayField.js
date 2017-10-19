import React from 'react'
import Tile from './Tile'
import './PlayField.css'

export default ({ field }) => {
  const width = field[0].length * 10
  const height = field.length * 10

  return (
    <div className="PlayField-Container">
      <svg className="PlayField" width={width} height={height}>
        {field && field.map((row, y) => row.map((tile, x) => <Tile key={`${x}-${y}`} x={x} y={y} type={tile} />))}
      </svg>
    </div>
  )
}
