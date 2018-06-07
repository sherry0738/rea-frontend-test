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
          title={<img alt="example" src={result.agency.logo} />}
          cover={<img alt="example" src={result.mainImage} />}  
        >
        <Meta
          title={this.props.result.price}
          description="www.realestate.com"
        />
        </Card>
    </Card>
    </div> 
  }
}