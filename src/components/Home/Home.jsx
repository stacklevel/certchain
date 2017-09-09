import React, { Component } from 'react';
import CompaniesTable from '../CompaniesTable/CompaniesTable';
import { Row, Col } from 'antd';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.props.getUser();
  }

  render() {
    return(
      <div className="Home">

        <Row type="flex" justify="start">
          <Col span={2}></Col>
          <Col span={20}>
            <CompaniesTable />
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}

export default Home;
