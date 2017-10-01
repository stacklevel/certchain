import React, { Component } from 'react';
import { Row, Col } from 'antd';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import 'antd/dist/antd.css';
import '../../../index.css';
import './MyWallet.css';

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
            <DashboardMenu active='4' />
          </Col>
          <Col span={20} style={{textAlign: 'center'}}>
            <Row style={{ display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems: 'center' }}>
               <div className="MyWallet__title">My Balance</div> 
              <div className="MyWallet__coin">
                <p className="coin-sum">{accountBalance === 0 ? 0 : accountBalance.toNumber()/1e8}</p>
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