import React, { Component } from 'react';
import { Link } from 'react-router'
import { bindAll } from 'lodash';
import { Input, Button, Row, Col, Form, Select, Menu, Icon, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import './ApplyForm.css';

const InputGroup = Input.Group;
const FormItem = Form.Item;
const Option = Select.Option;

class ApplyForm extends Component {
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

    this.renderInputField = this.renderInputField.bind(this);
  }

  renderInputField(label, name, value = '') {
    return (
      <FormItem label={label}>
        <Input
          className="Form__input"
          size="large"
          placeholder={label}
          name={name}
          value={value}
          onChange={this.handleInputChange}
        />
      </FormItem>
    );
  }
  render() {
    const rating = 3.7;
    const { company, directions, birth, address, phone, email} = this.state;

    return (
      <div className='ApplyForm'>
        <Row>
          <Col span={4}>
            <Menu defaultSelectedKeys={['5']}>
              <Menu.Item style={{ fontSize: 14 }} key='1'>
                <Link to='dashboard'><Icon type="user" style={{ fontSize: 16 }} />Profile</Link>
              </Menu.Item>
              <Menu.Item style={{ fontSize: 14 }} key='2'>
                <Link to='apply'><Icon type="edit" style={{ fontSize: 16 }} />Apply now</Link>
              </Menu.Item>
              <Menu.Item style={{ fontSize: 14 }} key='3'>
                <Link to='projects'><Icon type="book" style={{ fontSize: 16 }} />Projects</Link>
              </Menu.Item>
              <Menu.Item style={{ fontSize: 14 }} key='4'>
                <Link to='wallet'><Icon type="wallet" style={{ fontSize: 16 }} />My wallet</Link>
              </Menu.Item>
              <Menu.Item style={{ fontSize: 14 }} key='5'>
                <Link to='settings'><Icon type="setting" style={{ fontSize: 16 }} />Settings</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={20}>
            <Row>
              <div className="ApplyForm__title"></div>
            </Row>
            <Row>
              <div className="ApplyForm__table">
                <Col span='5'>
                  {this.renderInputField('Company Name', 'name')}
                  {this.renderInputField('Scope of activity', 'scope')}
                  {this.renderInputField('Made production/services', 'services')}
                </Col>
                <Col span='1'></Col>
                <Col span='5'>
                  {this.renderInputField('Address', 'address')}
                  {this.renderInputField('Checking account', 'account')}
                  {this.renderInputField('Bank info', 'bankInfo')}
                </Col>
                <Col span='1'></Col>
                <Col span='5'>
                  {this.renderInputField('INN', 'inn')}
                  {this.renderInputField('Phone', 'phone')}
                  {this.renderInputField('Email', 'email')}
                </Col>
                <Col span='1'>
                </Col>
                <Col span='5'>
                  <FormItem label='The number of employees'>
                    <InputNumber
                      className="Form__input"
                      size="large"
                      name={name}
                      value=''
                      onChange={this.handleInputChange}
                    />
                  </FormItem>
                  <FormItem label='Number of manufacturing sites'>
                    <InputNumber
                      className="Form__input"
                      size="large"
                      name={name}
                      value=''
                      onChange={this.handleInputChange}
                    />
                  </FormItem>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="ApplyForm__buttons">
                <Button type='default'>Cancel</Button>
                <Button type='primary'>Save</Button>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ApplyForm;