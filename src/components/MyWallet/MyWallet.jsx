import React, { Component } from 'react';
import { Link } from 'react-router'
import { bindAll } from 'lodash';
import { Input, Button, Row, Col, Form, Select, Menu, Icon, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import './MyWallet.css';

const InputGroup = Input.Group;
const FormItem = Form.Item;
const Option = Select.Option;

class MyWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountBalance: this.props.accountBalance || 0
    };
  }

  componentWillMount() {
    this.props.getAccountBalance();
  }

  componentWillReceiveProps(newProps) {
    if(this.props !== newProps) {
      this.setState({
        accountBalance: newProps.accountBalance || 0
      });
    }
  }

  render() {
    const { accountBalance } = this.state;

    return (
      <div className='MyWallet'>
        <Row>
          <Col span={4}>
            <Menu defaultSelectedKeys={['4']}>
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
          <Col span={20} style={{textAlign: 'center'}}>
            <Row style={{ display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems: 'center' }}>
               <div className="MyWallet__title">My Balance</div> 
              <div className="MyWallet__coin">
                <p className="coin-sum">{accountBalance || 0}</p>
                <p className="coin-title">CRT</p>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MyWallet;