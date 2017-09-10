import React, { Component } from 'react';
import { bindAll } from 'lodash';
import { Input, Button, Row, Col, Form, Upload, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import './ManufacturerProfile.css';

const InputGroup = Input.Group;
const FormItem = Form.Item;

class ManufacturerProfile extends Component {
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

  handleSubmit() {
    console.log(this.state);
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
      <div className='ManufacturerProfile'>
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
            <div className="ManufacturerProfile__button-block">
              <Button
                className="ManufacturerProfile__button"
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

export default ManufacturerProfile;