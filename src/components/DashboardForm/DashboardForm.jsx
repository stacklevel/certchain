import React, { Component } from 'react';
import { Link } from 'react-router'
import { bindAll } from 'lodash';
import { Input, Button, Row, Col, Form, Select, Menu, Icon, Rate, Layout, Card, Tag } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import './DashboardForm.css';
import CoursesTable from '../CoursesTable/CoursesTable';
import JobExperienceTable from '../JobExperienceTable/JobExperienceTable';
import AuditActivityTable from '../AuditActivityTable/AuditActivityTable';

const InputGroup = Input.Group;
const FormItem = Form.Item;
const Option = Select.Option;

class DashboardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: 'Easy Standart LLC',
      directions: 'ISO 9001',
      birth: '28.03.1998',
      address: 'Yasenina Street 53-43',
      phone: '+375251232312',
      email: 'adasd@asd.com'
    };
  }

  render() {
    const rating = 3.7;
    const { company, directions, birth, address, phone, email} = this.state;

    return (
      <div className='DashboardForm'>
        <Row>
          <Col span={4}>
            <Menu defaultSelectedKeys={['key-1']}>
              <Menu.Item style={{ fontSize: 14 }} key='key-1'>
                <Link to='dashboard'><Icon type="user" style={{ fontSize: 16 }} />Profile</Link>
              </Menu.Item>
              <Menu.Item style={{ fontSize: 14 }}>
                <Link to='apply'><Icon type="edit" style={{ fontSize: 16 }} />Apply now</Link>
              </Menu.Item>
              <Menu.Item style={{ fontSize: 14 }}>
                <Link to='projects'><Icon type="book" style={{ fontSize: 16 }} />Projects</Link>
              </Menu.Item>
              <Menu.Item style={{ fontSize: 14 }}>
                <Link to='wallet'><Icon type="wallet" style={{ fontSize: 16 }} />My wallet</Link>
              </Menu.Item>
              <Menu.Item style={{ fontSize: 14 }}>
                <Link to='settings'><Icon type="setting" style={{ fontSize: 16 }} />Settings</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <div className="top-block">
            <Col span={6} className='main-info' style={{ textAlign: 'center' }}>
              <div className='personal-info'>PERSONAL INFORMATION</div>
              <img style={{ width: 110, height: 110, borderRadius: '50%' }}src='img/auditor.png' alt=""/>
              <h1 style={{ color: '#453937' }}>Eugene Traytyak</h1>
              <div>
                <Rate onChange={this.handleChange} value={rating} disabled={true} />
                {rating && <span className="ant-rate-text">{rating} stars</span>}
              </div>
              <div className="info-fileds">
                <div className="field-title">
                  Company:&nbsp;
                  <span className="field-value">{company}</span>
                </div>
                <div className="field-title">
                  Directions of audit:&nbsp;
                  <span className="field-value">{directions}</span>
                </div>
                <div className="field-title">
                  Date of birth:&nbsp;
                  <span className="field-value">{birth}</span>
                </div>
                <div className="field-title">
                  Address:&nbsp;
                  <span className="field-value">{address}</span>
                </div>
                <div className="field-title">
                  Phone:&nbsp;
                  <span className="field-value">{phone}</span>
                </div>
                <div className="field-title">
                  Mail:&nbsp;
                  <span className="field-value">{email}</span>
                </div>
              </div>
            </Col>
            <Col span={18} className='education-block'>
              <div className='personal-info'>EDUCATION</div>
              <div className="education-fields">
                <div className="field-title">
                  Company:&nbsp;
                  <span className="field-value">{company}</span>
                </div>
                <div className="field-title">
                  Directions of audit:&nbsp;
                  <span className="field-value">{directions}</span>
                </div>
                <div className="field-title">
                  Date of birth:&nbsp;
                  <span className="field-value">{birth}</span>
                </div>
              </div>
              <div className="tables">
                <div className="table-title">TRAINING AND REFRESHMENT COURSES</div>
                <CoursesTable />
              </div>
            </Col>
          </div>
        </Row>
        <Row>
          <Col span='4'></Col>
          <div className="bottom-block">
            <Col span='24'>
              <div className="table-block">
                <div className='table-title'>Job Experiences</div>
                <JobExperienceTable />
              </div>
              <div className="table-block">
                <div className='table-title'>Audit activity</div>
                <AuditActivityTable />
              </div>
            </Col>
          </div>
        </Row>
      </div>
    );
  }
}

export default DashboardForm;