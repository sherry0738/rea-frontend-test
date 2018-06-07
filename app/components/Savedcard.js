import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

export default class Resultscard extends React.Component {
    
      constructor(props) {
        super(props)
      }
    
      render() {
        const saved = this.props.saved;
        return <div>
        <Card title="Saved">
        <Card
          hoverable
          style={{ width: 500 }}
          type="inner"
          title={<img alt="agency_logo" src={saved.agency.logo} />}
          extra={<a href="#">&#128269;</a>}
          cover={<img alt="main_image" src={saved.mainImage} />}
        >
        <Meta
          title={saved.price}
          description="description"
        />
        </Card>
      </Card>
        </div>
      }
    }
   