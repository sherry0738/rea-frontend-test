import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import './Resultscard.scss';

export default class Resultscard extends React.Component {
  render() {
    const result = this.props.result;
    const logoStyle = {
      backgroundColor: result.agency.brandingColors.primary,
      width: '95%',
    };
    return (
      <div className="cards_container">
        <Card
          hoverable
          type="inner"
          style={logoStyle}
          className="result_card"
          title={<img alt="agency_logo" src={result.agency.logo} />}
          cover={<img alt="main_image" src={result.mainImage} />}
        >
          <div className="price_box">
            <p>
              <span className="price">{result.price}</span>
            </p>
          </div>
          <div className="btn_container">
            <div className="btn_box">
              <Button
                className="addBtn"
                type="edit"
                onClick={() => this.props.handlePropertyAdd(result)}
              >
                Add
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
