import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import { Button } from 'antd';
import './Resultscard.scss'

export default class Resultscard extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const result = this.props.result;
    const logoStyle = {
      backgroundColor: result.agency.brandingColors.primary,
      width: "500px" 
    }
    return <div className="cards_container">
      <Card
      hoverable
      style={logoStyle}
      className="result_card"         
      title={<img alt="agency_logo" src={result.agency.logo} />}
      cover={<img alt="main_image" src={result.mainImage} />} 
      > 
      <p><span className="price">{result.price}</span></p> 
      <div className="btn_container"> 
        <div className="btn_box">
          <button
          className="addBtn"
          type="edit"
          onClick={() => this.props.btnOnClick(result)}>Add
          </button> 
        </div>
      </div>
      </Card>
    </div> 
  }
}