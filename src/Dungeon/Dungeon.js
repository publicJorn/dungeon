import React, { Component } from 'react'
import PlayField from './components/PlayField'
import dungeonGenerator from './generator/index'

export default class DungeonView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dungeonInstance: null,
      field: [[]],
    }
  }

  componentWillMount () {
    const dungeon = dungeonGenerator()

    this.setState({
      dungeonInstance: dungeon,
      field: dungeon.getField(),
    })
  }

  render () {
    return <PlayField field={this.state.field} />
  }
}
