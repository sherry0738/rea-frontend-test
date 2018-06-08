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
    return <div>
    <Card title="Results">
      <Card
      hoverable
      style={{ width: 500 }}
      type="inner"          
      title={<img alt="agency_logo" src={result.agency.logo} />}
      cover={<img alt="main_image" src={result.mainImage} />}  
      > 
      <p><span className="price">{result.price}</span><span className="search_icon">{<a href="#">&#128269;</a>}</span></p>  
      <button
        className=""
        type="edit"
        onClick={() => this.props.addBtnOnClick(result)}
        >Add +</button>   
      </Card>
    </Card>
    </div> 
  }
}