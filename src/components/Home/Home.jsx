import React, { Component } from 'react';
// import CompaniesTable from '../CompaniesTable/CompaniesTable';
import { Row, Col } from 'antd';
import AuditorsListDemo from '../AuditorsListDemo/AuditorsListDemo';
import OrgansListDemo from '../OrgansListDemo/OrgansListDemo';
import CompaniesListDemo from '../CompaniesListDemo/CompaniesListDemo';

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
            <AuditorsListDemo
              auditors={this.props.auditors}
              getAllAuditors={this.props.getAllAuditors}
              pagination={false}
            ></AuditorsListDemo>
            <OrgansListDemo
              organs={this.props.organs}
              getAllOrgans={this.props.getAllOrgans}
              pagination={false}
            ></OrgansListDemo>
            <CompaniesListDemo
              manufacturers={this.props.manufacturers}
              getAllManufacturers={this.props.getAllManufacturers}
              pagination={false}
            ></CompaniesListDemo>
             {/* <CompaniesTable />  */}
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}

export default Home;
