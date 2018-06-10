import React, { Component } from 'react';
import { Card } from 'antd';
import Resultscard from './Resultscard';
import Savedcard from './Savedcard';
import { message } from 'antd';

import {
  checkIfPropertyIsSaved,
  savePropertyToSaved,
  removePropertyFromSaved,
} from '../../lib/PropertyFunctions';

const Config = require('Config');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlePropertyAdd = this.handlePropertyAdd.bind(this);
    this.handlePropertyRemove = this.handlePropertyRemove.bind(this);
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

  handlePropertyAdd(property) {
    const saved = this.state.saved;
    if (checkIfPropertyIsSaved(property, saved)) {
      message.error('Property Already Saved', 4);
    } else {
      this.setState({
        saved: savePropertyToSaved(property, saved),
      });
      message.success('Added into Saved List', 4);
    }
  }

  handlePropertyRemove(property) {
    const saved = this.state.saved;
    if (checkIfPropertyIsSaved(property, saved)) {
      this.setState({
        saved: removePropertyFromSaved(property, saved),
      });
      message.success('The Property deleted', 4);
      if (saved.length == 0) {
        message.warning('No saved property!');
      }
    } else {
      message.error('Could not find the property!', 4);
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
                        handlePropertyAdd={this.handlePropertyAdd}
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
                        handlePropertyRemove={this.handlePropertyRemove}
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
