import React, { Component } from 'react';
import { bindAll } from 'lodash';
import { Input, Button, Row, Col, Form, Upload, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import './RegisterOrganForm.css';

const InputGroup = Input.Group;
const FormItem = Form.Item;

class RegisterOrganForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      address: '',
      document: '',
      phone: '',
      email: '',
    };

    bindAll(this, [
      'handleInputChange',
      'handleDocumentChange',
      'handleSubmit',
    ]);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleDocumentChange(document) {
    console.log(document);
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    const {
      companyName,
      address,
      phone,
      email
    } =  this.state;

    return (
      <div className='RegisterOrganForm'>
        <h2 className='Form__title'>Organ Registration</h2>
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
              <FormItem
                label="Document"
              >
                <Upload name="certification" onChange={this.handleDocumentChange}>
                  <Button>
                    <Icon type="upload" /> Upload
                  </Button>
                </Upload>
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
            <div className="RegisterOrganForm__button-block">
              <Button
                className="RegisterOrganForm__button"
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

export default RegisterOrganForm;