import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';
import { Link } from 'react-router';
import 'antd/dist/antd.css';
import '../../index.css';
import './SignUpButtons.css';

class SignUpButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='SignUpButtons'>
        <h2 className='Form__title'>Choose your role:</h2>
        <Row>
          <Col span={8} />
          <Col span={8} className='SignUpButtons__group'>
            <Link to='register-manufacturer'><Button ghost>Manufacturer</Button></Link>
            <Link to='register-auditor'><Button ghost>Auditor</Button></Link>
            <Link to='register-organ'><Button ghost>Certification Body</Button></Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignUpButtons;
