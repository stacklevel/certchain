import React, { Component } from 'react';
import { bindAll } from 'lodash';
import { Input, Button, Row, Col, Form, Select } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import './RegisterManufacturerForm.css';

const InputGroup = Input.Group;
const FormItem = Form.Item;
const Option = Select.Option;

class RegisterManufacturerForm extends Component {
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
    this.setState({
      scope
    });
  }

  handleSubmit() {
    console.log(this.state);
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

    return (
      <div className='RegisterManufacturerForm'>
        <h2 className='Form__title'>Manufacturer Registration</h2>
        <Row>
          <Col span={8} />
          <Col span={8}>
            <InputGroup size="large">
              <FormItem label="Company name">
                <Input
                  className="Form__input"
                  size="large"
                  placeholder="Company name"
                  name='companyName'
                  value={companyName}
                  onChange={this.handleInputChange}
                />
              </FormItem>
              <FormItem label="Scope of activity">  
                <Select
                  className="Form__select"
                  placeholder="Please select scope"
                  onChange={this.handleSelectChange}
                  defaultValue={scope}
                >
                  <Option value="Medicine">Medicine</Option>
                  <Option value="Industry">Industry</Option>
                  <Option value="IT">IT</Option>
                  <Option value="Consulting">Consulting</Option>
                </Select>
              </FormItem>
              <FormItem label="Products">
                <Input
                  className="Form__input"
                  size="large"
                  placeholder="Products"
                  name='products'
                  value={products}
                  onChange={this.handleInputChange}
                />
              </FormItem>
              <FormItem label="Address">
                <Input
                  className="Form__input"
                  size="large"
                  placeholder="Address"
                  name='address'
                  value={address}
                  onChange={this.handleInputChange}
                />
              </FormItem>
              <FormItem label="Account">
                <Input
                  className="Form__input"
                  size="large"
                  placeholder="Account"
                  name='account'
                  value={account}
                  onChange={this.handleInputChange}
                />
              </FormItem>
              <FormItem label="Bank name">
                <Input
                  className="Form__input"
                  size="large"
                  placeholder="Bank name"
                  name='bankName'
                  value={bankName}
                  onChange={this.handleInputChange}
                />
              </FormItem>
              <FormItem label="Phone number">
                <Input
                  className="Form__input"
                  size="large"
                  placeholder="Phone number"
                  name='phone'
                  value={phone}
                  onChange={this.handleInputChange}
                />
              </FormItem>
              <FormItem label="Email">
                <Input
                  className="Form__input"
                  size="large"
                  placeholder="Email"
                  name='email'
                  value={email}
                  onChange={this.handleInputChange}
                />
              </FormItem>
            </InputGroup>
            <div className="RegisterManufacturerForm__button-block">
              <Button
                className="RegisterManufacturerForm__button"
                type="primary"
                onClick={this.handleSubmit}
              >
                Register
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegisterManufacturerForm;