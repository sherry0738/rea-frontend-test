import React, { Component }  from 'react'
import Resultscard from './Resultscard'
import Savedcard from './Savedcard'

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
        this.setState({ saved: res.saved })
      })
  }

  render() {
    const results = this.state.results;
    const saved = this.state.saved;
    if(results && saved) {
      return <div className="card_container">
        <div>
        {results.map((property, index) => {
            return (
            <Resultscard  
            key={index} 
            result={property}
            className="results"
            />
            )
        })}
      </div>
      <div>
      {saved.map((property, index) => {
          return (
         <Savedcard  
         key={index} 
         saved={property}
         className="saved"
         />
          )
      })}
      </div>
    </div>
    }else {
      return <div>loading...</div>
    }
  }
}
