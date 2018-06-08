import React, { Component }  from 'react'
import { Card } from 'antd';
import Resultscard from './Resultscard'
import Savedcard from './Savedcard'
import { Alert } from 'antd';
import { Button, notification, Icon } from 'antd';
import { message } from 'antd';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.addProperty = this.addProperty.bind(this)
    this.deleteProperty = this.deleteProperty.bind(this)
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
    const saved = this.state.saved;
    let resultPropIndexAtSaved = saved.findIndex(savedProp => savedProp.id === resultProp.id)
    if (resultPropIndexAtSaved > -1) { 
      this.setState({ 
        alertType: "error", 
        alertMessage: 'Property Already Saved' 
      })
    } else {
      saved.push(resultProp)
      console.log(saved);
      this.setState({
        alertType: "success", 
        alertMessage: 'This Property Added into Saved List successfully'
      })
    }
  };

  deleteProperty(savedProp) {
    const saved = this.state.saved;
    let savedPropIndexAtSaved = saved.indexOf(savedProp);
    if(savedPropIndexAtSaved > -1) {  
      saved.splice(savedPropIndexAtSaved, 1);
      this.setState({
        alertType: "warning", 
        alertMessage: 'The Property deleted.'
      })
    } else {
      this.setState({
        alertType: "error", 
        alertMessage: 'Could not find the property!'
      })
    }
  }

  render() {
    const results = this.state.results;
    const saved = this.state.saved;
    if(results && saved) {
      return <div className="app_container">
        <div className="title_container">
          <div><b>Results</b></div>
          <div><b>Saved</b></div>
        </div>
        <div>
          <Alert 
          className="alert_msg"
          message={this.state.alertMessage}
          type={this.state.alertType}  
          /> 
      </div>
      <div className="card_container"> 
        <div>
        {results.map((property, index) => {
            return (<div>
            <Resultscard  
            key={index} 
            result={property}
            className="results"
            btnOnClick={this.addProperty}
            />
          <br/> 
          </div> 
          )
        })} 
      </div>
      <div>
      {saved.map((property, index) => {
          return (<div>
         <Savedcard  
         key={index} 
         saved={property}
         className="saved"
         btnOnClick={this.deleteProperty}
         />
         <br/>
         </div>
        )
      })}
      </div>
    </div>
    </div>
    }else {
      return <div>loading...</div>
    }
  }
}
