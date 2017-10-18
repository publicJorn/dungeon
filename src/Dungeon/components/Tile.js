import React from 'react'

export default ({ x, y, type }) => {
  const s = 10

  return <rect
    x={x * s}
    y={y * s}
    width={s}
    height={s}
    className={`Tile ${type}`}
    />
}
