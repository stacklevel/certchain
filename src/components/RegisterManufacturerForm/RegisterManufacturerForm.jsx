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
      bankName: '',
      uniqNumber: '',
      phone: '',
      email: '',
    };

    bindAll(this, [
      'handleInputChange',
      'handleSelectChange',
      'handleSubmit',
      'handleGetAll',
      'handleApprove',
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

  handleApprove() {
    this.props.approveTransaction();
  }

  handleSubmit(e) {
    e.preventDefault();

    const { companyName, scope, products, address, uniqNumber, bankName, phone, email } = this.state;

    this.props.registerManufacturer([companyName, scope, products, address, bankName, uniqNumber, phone, email]);
  }

  handleGetAll() {
    this.props.getAllManufacturers();
  }

  render() {
    const {
      companyName,
      scope,
      products,
      address,
      uniqNumber,
      bankName,
      phone,
      email
    } =  this.state;

    return (
      <div className='RegisterManufacturerForm'>
        <h2 className='Form__title'>Manufacturer Registration</h2>
        <Row>
          <Col span={6} />
          <Col span={12}>
            <Form onSubmit={this.handleSubmit}>
              <InputGroup size="large">
                <FormItem label="Company name">
                  <Input
                    className="Form__input"
                    size="large"
                    placeholder="Company name"
                    name='companyName'
                    value={companyName}
                    onChange={this.handleInputChange}
                    required
                  />
                </FormItem>
                <FormItem label="Scope of activity">
                  <Select
                    className="Form__select"
                    placeholder="Please select scope"
                    onChange={this.handleSelectChange}
                    defaultValue={scope}
                    required
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
                    required
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
                    required
                  />
                </FormItem>
                <FormItem label="uniqNumber">
                  <Input
                    className="Form__input"
                    size="large"
                    placeholder="uniqNumber"
                    name='uniqNumber'
                    value={uniqNumber}
                    onChange={this.handleInputChange}
                    required
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
                    required
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
                    required
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
                    required
                  />
                </FormItem>
              </InputGroup>
                <div className="RegisterManufacturerForm__button-block">
                  <Button
                    className="RegisterManufacturerForm__button"
                    type="primary"
                    htmlType="submit"
                  >
                    Register
                  </Button>
                <Button
                  className="RegisterAuditorForm__button"
                  type="default"
                  onClick={this.handleApprove}
                >
                  Approve - 10 CRT
                </Button>
                </div>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegisterManufacturerForm;
