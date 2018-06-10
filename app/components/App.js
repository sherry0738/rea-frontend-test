import React, { Component } from 'react';
import { Card, message, Alert } from 'antd';
import AdCard from './AdCard';

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
      error: null,
    };
  }

  componentDidMount() {
    let uri = Config.serverUrl;
    try {
      fetch(uri)
        .then(res => {
          if (!res.ok) {
            throw new Error('Failed to get property data.');
          }
          return res.json();
        })
        .then(res => {
          this.setState({ results: res.results });
          this.setState({ saved: res.saved });
          this.setState({ loading: false });
          this.setState({ error: null });
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    } catch (error) {
      this.setState({ error, loading: false });
    }
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
    const error = this.state.error;
    const loading = this.state.loading;

    if (error) {
      return (
        <div>
          <Alert message="Oh no!" description={error.message} type="error" />
        </div>
      );
    }

    if (results && saved) {
      return (
        <div className="app_container">
          <div className="main-container">
            <div className="result-container">
              <Card
                loading={this.state.loading}
                title="Results"
                className="results_title"
              >
                {results.map((property, index) => {
                  return (
                    <div>
                      <AdCard
                        key={index}
                        propertyData={property}
                        cardClass="results"
                        actionButtonText="Add"
                        handleOnClick={this.handlePropertyAdd}
                      />
                      <br />
                    </div>
                  );
                })}
              </Card>
            </div>
            <div className="saved-container">
              <Card
                loading={this.state.loading}
                title="Saved Properties"
                className="saved_title"
              >
                {saved.map((property, index) => {
                  return (
                    <div>
                      <AdCard
                        key={index}
                        propertyData={property}
                        cardClass="saved"
                        actionButtonText="Remove"
                        handleOnClick={this.handlePropertyRemove}
                      />
                      {/* 
                      <Savedcard
                        title="saved"
                        key={index}
                        saved={property}
                        className="saved"
                        handlePropertyRemove={this.handlePropertyRemove}
                      /> */}
                      <br />
                    </div>
                  );
                })}
              </Card>
            </div>
          </div>
        </div>
      );
    }
    if (loading) {
      return <div>loading</div>;
    }
  }
}
