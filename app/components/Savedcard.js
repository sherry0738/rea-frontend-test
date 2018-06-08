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
        <p><span className="price">{saved.price}</span><span className="search_icon">{<a href="#">&#128269;</a>}</span></p>
        <button
        className=""
        type="edit"
        >Delete</button>
        </Card>
      </Card>
        </div>
      }
    }
   