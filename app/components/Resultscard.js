import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

export default class Resultscard extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    return <div>
      <Card title="Results">
        <Card
        hoverable
        style={{ width: 500 }}
          type="inner"
          title={<img alt="example" src="http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif" />}
          cover={<img alt="example" src="http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg" />}  
        >
        <Meta
          title="$560,520"
          description="www.realestate.com"
        />
        </Card>
    </Card>
    </div> 
  }
}