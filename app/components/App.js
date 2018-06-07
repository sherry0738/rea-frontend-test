import React, { Component }  from 'react'
import Resultscard from './Resultscard'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return <div>
      <Resultscard />
    </div>
  }

}
