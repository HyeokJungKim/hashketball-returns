1) Install `redux` and `react-redux` via `npm install`

2) Create the store in index.js
  * `import {createStore} from 'redux'`
  * Create the reducer function
  * Invoke `createStore` with the reducer function

    i) Give default State

3) Give our React App some knowledge of our Redux store
  * `import {Provider} from 'react-redux'`
  * Wrap `Provider` around `App`
  * Pass in `store` props to `Provider`

4/5) Go to the components that need to know about the information in our Application State
  * We `import {connect} from 'react-redux'`
  * In order to get information, we mapStateToProps (as the first argument in `connect`)

    i) mapStateToProps is a function that gets the Application State for free

    ii) The return value of mapStateToProps will get merged as props

    iii) We can potentially use destructuring (optional)

4/5) Go to the components that need to send information to our Application State
  * We `import {connect} from 'react-redux'`
  * In order to set information, we mapStateToDispatch (as the second argument in `connect`)

    i) mapStateToDispatch is a function that gets the dispatch for free

    ii) The return value of mapStateToDispatch will get merged as props

    iii) We can potentially use destructuring (optional)
    
    iv) Action Creators (optional)
