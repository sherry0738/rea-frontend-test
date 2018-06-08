import React, { Component }  from 'react'
import Resultscard from './Resultscard'
import Savedcard from './Savedcard'
import { Alert } from 'antd';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.addProperty = this.addProperty.bind(this)
    this.state = {
      results: [],
      saved: [],
      alertType: "",
      alertMessage: ""
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

  addProperty(resultProp) {
    console.log(resultProp);
    if (resultProp) { 
      this.setState({ 
        alertType: "error", 
        alertMessage: 'Property Already Saved' })
    } else {
      this.setState({
        alertType: "success", 
        alertMessage: 'This Property Added into Saved List successfully'})
    }
  };

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
            addBtnOnClick={this.addProperty}
            />
            )
        })}
        <Alert 
        showIcon
        message={this.state.alertMessage}
        type={this.state.alertType}  
      />
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
