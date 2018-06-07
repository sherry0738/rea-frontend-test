import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

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
      <Meta
      title={result.price}
      description="description"
      />        
      </Card>
    </Card>
    </div> 
  }
}