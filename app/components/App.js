import React, { Component }  from 'react'
import Resultscard from './Resultscard'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      resultsList: [],
      savedList: []
  }
  }

  componentDidMount() {
    // url was created by webtask(mocking services) 
    let mockedUrl = 'https://wt-e244146629f527ab472b4d9589961290-0.sandbox.auth0-extend.com/Properties'
    fetch(mockedUrl)
      .then(res => res.json())
      .then(res => {
       this.setState({ results: res.results })
        console.log(this.state.results);
        this.setState({ saved: res.saved })
        console.log(this.state.saved)
      })
  }

  render() {
    return <div>
      <Resultscard />
    </div>
  }

}
