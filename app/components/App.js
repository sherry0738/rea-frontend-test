import React, { Component } from 'react';
import { Card } from 'antd';
import Resultscard from './Resultscard';
import Savedcard from './Savedcard';
import { message } from 'antd';
const Config = require('Config');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addProperty = this.addProperty.bind(this);
    this.deleteProperty = this.deleteProperty.bind(this);
    this.state = {
      results: [],
      saved: [],
      loading: true,
    };
  }

  componentDidMount() {
    let uri = Config.serverUrl;
    fetch(uri)
      .then(res => res.json())
      .then(res => {
        this.setState({ results: res.results });
        this.setState({ saved: res.saved });
        this.setState({ loading: false });
      });
  }

  addProperty(resultProp) {
    const saved = this.state.saved;
    let resultPropIndexAtSaved = saved.findIndex(
      savedProp => savedProp.id === resultProp.id
    );
    if (resultPropIndexAtSaved > -1) {
      message.error('Property Already Saved', 4);
    } else {
      saved.push(resultProp);
      this.setState({
        saved: saved,
      });
      message.success('Added into Saved List', 4);
    }
  }

  deleteProperty(savedProp) {
    const saved = this.state.saved;
    let savedPropIndexAtSaved = saved.indexOf(savedProp);
    if (savedPropIndexAtSaved > -1) {
      saved.splice(savedPropIndexAtSaved, 1);
      this.setState({
        saved: saved,
      });
      message.success('The Property deleted', 4);
    } else {
      message.error('Could not find the property', 4);
    }
  }

  render() {
    const results = this.state.results;
    const saved = this.state.saved;
    if (results && saved) {
      return (
        <div className="app_container">
          <div className="main_container">
            <div className="result_container">
              <Card
                loading={this.state.loading}
                title="Results"
                className="results_title"
              >
                {results.map((property, index) => {
                  return (
                    <div>
                      <Resultscard
                        key={index}
                        result={property}
                        className="results"
                        btnOnClick={this.addProperty}
                      />
                      <br />
                    </div>
                  );
                })}
              </Card>
            </div>
            <div className="saved_container">
              <Card
                loading={this.state.loading}
                title="Saved Properties"
                className="saved_title"
              >
                {saved.map((property, index) => {
                  return (
                    <div>
                      <Savedcard
                        title="saved"
                        key={index}
                        saved={property}
                        className="saved"
                        btnOnClick={this.deleteProperty}
                      />
                      <br />
                    </div>
                  );
                })}
              </Card>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}
