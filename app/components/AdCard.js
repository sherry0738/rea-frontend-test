import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import './AdCard.scss';

export default class AdCard extends React.Component {
  render() {
    const propertyData = this.props.propertyData;
    const cardClass = this.props.cardClass;
    const actionButtonText = this.props.actionButtonText;

    const logoStyle = {
      backgroundColor: propertyData.agency.brandingColors.primary,
      width: '95%',
    };
    return (
      <div className="card-container">
        <Card
          hoverable
          type="inner"
          style={logoStyle}
          className={cardClass}
          title={<img alt="agency_logo" src={propertyData.agency.logo} />}
          cover={<img alt="main_image" src={propertyData.mainImage} />}
        >
          <div className="price-box">
            <p>
              <span className="price">{propertyData.price}</span>
            </p>
          </div>
          <div className="btn-container">
            <div className="btn-box">
              <Button
                className="action-btn "
                type="edit"
                onClick={() => this.props.handleOnClick(propertyData)}
              >
                {actionButtonText}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
