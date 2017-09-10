import React, { Component } from 'react';
import { Link } from 'react-router'
import { bindAll } from 'lodash';
import { Input, Button, Row, Col, Form, Select, Menu, Icon, InputNumber, Table } from 'antd';
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
      certOrders: this.props.certOrders,
      userType: this.props.userType,
      manufacturers: this.props.manufacturers,
      auditors: this.props.auditors,
      currentUserAccount: this.props.currentUserAccount,
    };

    this.renderInputField = this.renderInputField.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.handleResolve = this.handleResolve.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleAuditorSelect = this.handleAuditorSelect.bind(this);
  }

  componentWillMount() {
    this.props.getUser();
    this.props.getAll();
  }

  componentWillReceiveProps(newProps) {
    if(this.props !== newProps) {
      this.setState({
        userType: newProps.userType,
        certOrders: newProps.certOrders,
        manufacturers: newProps.manufacturers,
        auditors: newProps.auditors,
        currentUserAccount: newProps.currentUserAccount && Object.keys(newProps.currentUserAccount)[0],
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
      certification: {
        ...this.state.certification,
        certificationInfo
      }
    });
  }

  handleAuditorSelect(auditorAddress) {
    this.props.selectAuditorForCertification(auditorAddress);
  }

  handleApply(manufacturerAddress) {
    this.props.applyForCertification(manufacturerAddress, 10);
  }

  handleResolve(manufacturerAddress) {
    this.props.setAuditorResolutionForCertification(manufacturerAddress, 'Resolved!');
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

  renderTable() {
    const { userType, certOrders, manufacturers, auditors, currentUserAccount } = this.state;
    let dataSource = [];

    const columns = [
      {
        title: 'Company',
        dataIndex: 'name',
      },
      {
        title: 'Scope',
        dataIndex: 'scope',
      },
      {
        title: 'Products',
        dataIndex: 'productsAndServices',
      },
      // {
      //   title: 'Address',
      //   dataIndex: 'legalAddress',
      // },
      {
        title: 'Bank',
        dataIndex: 'bankName',
      },
      // {
      //   title: 'INN',
      //   dataIndex: 'uniqNumber',
      // },
      // {
      //   title: 'Phone',
      //   dataIndex: 'phoneNumber',
      // },
      // {
      //   title: 'Email',
      //   dataIndex: 'email',
      // },
      {
        title: 'Applied auditors',
        dataIndex: 'users',
        render: (users, record) => {
          return users.map((user, index) => {
            return auditors[user] && (
              <div>
              {
                userType === 'manufacturer' ?
                  (
                    <div className='applied-auditor' key={index}>
                      <p>{auditors[user].name}&nbsp;&nbsp;&nbsp;</p>

                      <Button onClick={this.handleAuditorSelect.bind(this, user)}><Icon type='check'></Icon></Button>
                    </div>
                  ) :
                  (<div key={index}>{auditors[user].name}</div>)
              }
              </div>
            );
          })
        }
      },
      {
        title: 'Selected Auditor',
        dataIndex: 'selectedAuditor',
      },
      {
        title: 'Standard',
        dataIndex: 'certInfo',
      },
      {
        title: 'Actions',
        dataIndex: 'action',
        render: (text, record) =>
        {
          console.log(text, record)
          if(text.action === 'resolve'){
            return (
              <div className='icon-block'>
                <Button type='success' onClick={this.handleResolve.bind(this, text.key)}>Resolve</Button>
              </div>
            );
          } else if(text.action === 'apply') {
            return (
              <div className='icon-block'>
                <Button type='primary' onClick={this.handleApply.bind(this, text.key)}>Apply</Button>
              </div>
            );
          } else {
            return (
              <div className='icon-block'>
                {/* <Icon type="close-circle" style={{ fontSize: 16, color: '#f04134' }}/> */}
              </div>
            );
          }
        },
      },
    ];


    Object.keys(certOrders).map((key, index) => {
      let auditorKey = certOrders[key].selectedAuditor;
      let auditorName = '';
      let action = '';

      if(parseInt(auditorKey.toString(16)) && auditors[auditorKey]) {
        auditorName = auditors[auditorKey].name;
      }

      if(userType === 'auditor' && currentUserAccount && (auditorKey.toString(16) === currentUserAccount.toString(16))) {
        action = 'resolve';
      } else if(userType === 'auditor' && !auditorName.length) {
        action = 'apply';
      }

      dataSource.push({
        name: manufacturers[key].name,
        scope: manufacturers[key].scope,
        productsAndServices: manufacturers[key].productsAndServices,
        // legalAddress: manufacturers[key].legalAddress,
        bankName: manufacturers[key].bankName,
        // uniqNumber: manufacturers[key].uniqNumber,
        // phoneNumber: manufacturers[key].phoneNumber,
        // email: manufacturers[key].email,
        users: [
          certOrders[key].appliedAuditor1,
          certOrders[key].appliedAuditor2,
          certOrders[key].appliedAuditor3,
          certOrders[key].appliedAuditor4,
          certOrders[key].appliedAuditor5,
        ],
        selectedAuditor: auditorName,
        certInfo: certOrders[key].certInfo,
        action: { action, key }
      });
    });

    return (<Table bordered dataSource={dataSource} columns={columns} pagination={false}/>);
  }

  render() {
    const { certificationInfo, secretInfo } = this.state.certification;
    const { userType, certOrders, manufacturers } = this.state;

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
          <Row>
            <Col span='1'></Col>
            <Col span='22'>
              <div className="ApplyForCertificationForm__title">List of applicants</div>
              {this.renderTable()}
            </Col>
          </Row>
        {
          userType === 'manufacturer' && (
            <Row>
              <div className="ApplyForCertificationForm__table">
                <Col span='6'></Col>
                <Col span='12'>
                  <div className="ApplyForCertificationForm__title">Register Certification</div>
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
            )
        }
        </Col>
      </div>
    );
  }
}

export default ApplyForCertificationForm;
