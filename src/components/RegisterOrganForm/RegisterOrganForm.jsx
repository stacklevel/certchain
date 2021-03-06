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
      document: null,
      phone: '',
      email: '',
    };

    bindAll(this, [
      'handleInputChange',
      'handleFileChange',
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

  handleFileChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      this.setState({
        document: file.thumbUrl
      });
    }
  }

  handleApprove() {
    this.props.approveTransaction();
  }

  handleSubmit(e) {
    e.preventDefault();

    const { companyName, address, phone, email } = this.state;

    this.props.registerOrgan([companyName, address, phone, email]);
  }

  handleGetAll() {
    this.props.getAllOrgans();
  }

  render() {
    const {
      companyName,
      address,
      phone,
      email
    } = this.state;

    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
    };

    return (
      <div className='RegisterOrganForm'>
        <h2 className='Form__title'>Certification Body Registration</h2>
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
                <FormItem
                  label="Document"
                >
                  <Upload {...props} name="document" listType="picture" onChange={this.handleFileChange}>
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
              <div className="RegisterOrganForm__button-block">
                <Button
                  className="RegisterOrganForm__button"
                  type="primary"
                  htmlType="submit"
                >
                  Register
                </Button>
                <Button
                  className="RegisterOrganForm__button"
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

export default RegisterOrganForm;
