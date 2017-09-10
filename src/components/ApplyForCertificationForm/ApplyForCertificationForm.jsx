import React, { Component } from 'react';
import { Link } from 'react-router'
import { bindAll } from 'lodash';
import { Input, Button, Row, Col, Form, Select, Menu, Icon, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import './ApplyForCertificationForm.css';

const InputGroup = Input.Group;
const FormItem = Form.Item;
const Option = Select.Option;

class ApplyForCertificationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      certification: {
        certificationInfo: '',
        secretInfo: '',
      },
      userType: null
    };

    this.renderInputField = this.renderInputField.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentWillMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(newProps) {
    if(this.props.userType !== newProps.userType) {
      this.setState({
        userType: newProps.userType[window.web3.eth.accounts[0]].role
      });
    }
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      certification: {
        ...this.state.certification,
        [name]: value,
      }
    });
  }

  handleSelectChange(certificationInfo) {
    this.setState({
      certificationInfo
    });
  }

  handleApply() {
    // this.props.registerForCertification(this.state.certification);
  }

  handleRegister() {
    this.props.registerForCertification(this.state.certification);
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
    const { certificationInfo, secretInfo } = this.state.certification;
    const { userType } = this.state;

    return (
      <div className='ApplyForCertificationForm'>
        <Col span={4}>
          <Menu defaultSelectedKeys={['2']}>
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
        {
          userType === 'manufacturer' ? (
            <Row>
              <div className="ApplyForCertificationForm__table">
                <Col span='6'></Col>
                <Col span='12'>
                  <div className="ApplyForCertificationForm__title">Apply for Certification</div>
                  <FormItem
                    label="Certification info"
                  >
                    <Select
                      className="Form__select"
                      placeholder="Please select"
                      onChange={this.handleSelectChange}
                      defaultValue={certificationInfo}
                    >
                      <Option value="ISO 9001">ISO 9001</Option>
                      <Option value="ISO 13485">ISO 13485</Option>
                      <Option value="CE">CE</Option>
                    </Select>
                  </FormItem>
                  {this.renderInputField('Secret info', 'secretInfo', secretInfo)}
                  <div className="ApplyForCertificationForm__buttons">
                    <Button type='primary' onClick={this.handleRegister}>Register for Certification</Button>
                  </div>
                </Col>
              </div>
            </Row>
            ) : (
              <Row>
              <div className="ApplyForCertificationForm__table">
                <Col span='6'></Col>
                <Col span='12'>
                  <div className="ApplyForCertificationForm__title">List of applicants</div>
                  <div className="ApplyForCertificationForm__buttons">
                    <Button type='primary' onClick={this.handleApply}>Apply</Button>
                  </div>
                </Col>
              </div>
            </Row>
            )
        }
        </Col>
      </div>
    );
  }
}

export default ApplyForCertificationForm;