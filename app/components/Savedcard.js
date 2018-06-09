import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import './Savedcard.scss';

export default class Resultscard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const saved = this.props.saved;
    const logoStyle = {
      backgroundColor: saved.agency.brandingColors.primary,
      width: '95%',
    };
    return (
      <div className="cards_container">
        <Card
          hoverable
          style={logoStyle}
          className="saved_card"
          title={<img alt="agency_logo" src={saved.agency.logo} />}
          cover={<img alt="main_image" src={saved.mainImage} />}
        >
          <div className="price_box">
            <p>
              <span className="price">{saved.price}</span>
            </p>
          </div>
          <div className="btn_container">
            <div className="btn_box">
              <button
                className="deleteBtn"
                type="edit"
                onClick={() => this.props.btnOnClick(saved)}
              >
                Delete
              </button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
