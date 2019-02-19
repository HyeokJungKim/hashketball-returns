import React from 'react'
import {connect} from 'react-redux'
import {selectPlayer} from '../redux'

const Player = ({ player, selectPlayer }) => {
  return (
    <div onClick={() => selectPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}

export default connect(null, { selectPlayer })(Player)
