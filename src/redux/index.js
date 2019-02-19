import gamesData from '../gamesData'

// const defaultState = gamesData
// or
const defaultState = {
  teams: gamesData.teams,
  dreams: gamesData.dreams,
  selectedPlayer: {}
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SELECT_PLAYER":
      return {...state, selectedPlayer: action.payload}
    default:
      return state
  }
}


// *----ACTION CREATOR-----*

export const selectPlayer = (baller) => {
  return {
    type: "SELECT_PLAYER",
    payload: baller
  }
}
