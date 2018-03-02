import React from 'react'
import Tile from './Tile'
import './PlayField.css'

export default ({ field }) => (
  <div className="PlayField-Container">
    <svg className="PlayField">
      {field && field.map((row, y) => row.map((tile, x) => <Tile key={`${x}-${y}`} x={x} y={y} type={tile} />))}
    </svg>
  </div>
)
