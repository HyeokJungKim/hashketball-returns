import React from 'react'
import Team from './Team'
import { connect } from 'react-redux'

const TeamList = (props) => {
  console.log(props.dispatch);
  const renderedTeams = props.teams.map(team => {
    return <Team key={team.id} team={team} />
  })

  return (
    <div className="team-list">
      {renderedTeams}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { teams: state.teams, dreams: state.dreams }
}

export default connect(mapStateToProps)(TeamList)
