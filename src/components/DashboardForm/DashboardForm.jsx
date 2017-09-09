import React, { Component } from 'react';
import { bindAll } from 'lodash';
import { Input, Button, Row, Col, Form, Select, Menu, Icon, Rate, Layout, Card, Tag } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import './DashboardForm.css';

const InputGroup = Input.Group;
const FormItem = Form.Item;
const Option = Select.Option;

class DashboardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      scope: '',
      products: '',
      address: '',
      account: '',
      bankName: '',
      phone: '',
      email: '',
    };

    bindAll(this, [
      'handleInputChange',
      'handleSelectChange',
      'handleSubmit',
    ]);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSelectChange(scope) {
    this.setState({ scope });
  }

  handleSubmit() {
    const { companyName, scope, products, address, account, bankName, phone, email } = this.state;

    this.props.registerManufacturer([companyName, scope, products, address, bankName, account, phone, email]);
  }

  render() {
    const {
      companyName,
      scope,
      products,
      address,
      account,
      bankName,
      phone,
      email
    } =  this.state;

    const rating = 3.7;

    return (
      <div className='DashboardForm'>
        <Row>
          <Col span={4}>
            <Menu>
              <Menu.Item style={{ fontSize: 14 }}><Icon type="user" style={{ fontSize: 16 }} />Profile</Menu.Item>
              <Menu.Item style={{ fontSize: 14 }}><Icon type="folder-open" style={{ fontSize: 16 }} />Orders</Menu.Item>
              <Menu.Item style={{ fontSize: 14 }}><Icon type="home" style={{ fontSize: 16 }} />Companies</Menu.Item>
              <Menu.Item style={{ fontSize: 14 }}><Icon type="solution" style={{ fontSize: 16 }} />Certificates</Menu.Item>
              <Menu.Item style={{ fontSize: 14 }}><Icon type="setting" style={{ fontSize: 16 }} />Settings</Menu.Item>
            </Menu>
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <img style={{ width: 110, height: 110, borderRadius: '50%' }}src='img/auditor.png' alt=""/>
            <h1 style={{ color: '#453937' }}>Eugene Traytyak</h1>
            <h3 style={{ color: '#453937' }}>Easy Standard LLC</h3>

            <div>
              <Rate onChange={this.handleChange} value={rating} disabled={true} />
              {rating && <span className="ant-rate-text">{rating} stars</span>}
            </div>

            <h4 style={{ color: '#453937' }}>Available standards:</h4>
            <div><Tag>ISO 9001</Tag><Tag>ISO 9002</Tag><Tag>ISO 9003</Tag></div>
          </Col>
          <Col span={12}>
            <h2 className='Form__title'>Orders list</h2>
            <Card title="McDonald's certification">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro veritatis delectus labore amet unde culpa corrupti explicabo veniam saepe provident, totam nemo at similique. Est laborum, non ipsam atque perferendis.
              <br/>
              <Tag>ISO 9001</Tag>, <Tag>ISO 9002</Tag>
            </Card>
            <br/>
            <Card title="Burger King certification">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro veritatis delectus labore amet unde culpa corrupti explicabo veniam saepe provident, totam nemo at similique. Est laborum, non ipsam atque perferendis.
              <br/>
              <Tag>ISO 9001</Tag>
            </Card>
            <br/>
            <Card title="KFC certification">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro veritatis delectus labore amet unde culpa corrupti explicabo veniam saepe provident, totam nemo at similique. Est laborum, non ipsam atque perferendis.
              <br/>
              <Tag>ISO 9001</Tag>, <Tag>ISO 9002</Tag>, <Tag>ISO 9003</Tag>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardForm;