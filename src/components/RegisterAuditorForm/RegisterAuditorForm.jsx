import React, { Component } from 'react';
import { bindAll } from 'lodash';
import { Input, Button, Row, Col, Form, Upload, Icon, Select, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import './RegisterAuditorForm.css';

const InputGroup = Input.Group;
const FormItem = Form.Item;
const Option = Select.Option;

class RegisterAuditorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      direction: '',
      organization: '',
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

  handleSelectChange(direction) {
    this.setState({
      direction
    });
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    const {
      fullName,
      direction,
      organization,
      phone,
      email
    } =  this.state;

    return (
      <div className='RegisterAuditorForm'>
        <h2 className='Form__title'>Auditor Registration</h2>
        <Row>
          <Col span={8} />
          <Col span={8}>
            <InputGroup size="large">
              <FormItem label="Full name">
                <Input
                  className="Form__input"
                  size="large"
                  placeholder="Full name"
                  name='fullName'
                  value={fullName}
                  onChange={this.handleInputChange}
                />
              </FormItem>
              <FormItem
                label="Audit direction"
              >
                <Select
                  className="Form__select"
                  placeholder="Please select direction"
                  onChange={this.handleSelectChange}
                  defaultValue={direction}
                >
                  <Option value="ISO 9001">ISO 9001</Option>
                  <Option value="ISO 13485">ISO 13485</Option>
                  <Option value="CE">CE</Option>
                </Select>
              </FormItem>
              <FormItem
                label="Education"
              >
                <div className="Form__inline">
                  <DatePicker format="YYYY-MM-DD" />
                  <Input
                    className="Form__input"
                    size="large"
                    placeholder="Organization name"
                    name='organiztion'
                    value={organization}
                    onChange={this.handleInputChange}
                  />
                </div>
              </FormItem>
              <FormItem
                label="Certification document"
              >
                <div className="Form__inline">
                  <DatePicker format="YYYY-MM-DD" />
                  <Input
                    className="Form__input"
                    size="large"
                    placeholder="Organization name"
                    name='organiztion'
                    value={organization}
                    onChange={this.handleInputChange}
                  />
                </div>
                <Upload name="certification" action="/upload.do" listType="picture">
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
            <div className="RegisterAuditorForm__button-block">
              <Button
                className="RegisterAuditorForm__button"
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

export default RegisterAuditorForm;