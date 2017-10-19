import React, { Component } from 'react'
import PlayField from './components/PlayField'
import dungeonGenerator from './generator/index'

export default class DungeonView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dungeon: null,
    }
  }

  componentWillMount () {
    const dungeon = dungeonGenerator()

    this.setState({
      dungeon,
    })
  }

  render () {
    return <PlayField field={this.state.dungeon.getField()} />
  }
}
