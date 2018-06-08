import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import { Button } from 'antd';
import './Savedcard.scss'

export default class Resultscard extends React.Component {
    
      constructor(props) {
        super(props)
      }
    
      render() {
        const saved = this.props.saved;
        const logoStyle = {
            backgroundColor: saved.agency.brandingColors.primary,
            width: "500px" 
        }
        return <div>
        <Card
          hoverable
          style={logoStyle}
          className="saved_card"
          title={<img alt="agency_logo" src={saved.agency.logo} />}
          cover={<img alt="main_image" src={saved.mainImage} />}
        >
        <div>
            <p><span className="price">{saved.price}</span></p>
            <button
            className=""
            type="edit"
            onClick={() => this.props.btnOnClick(saved)}>Delete
            </button>
        </div>
        </Card>
        </div>
      }
    }
   