import React, { Component } from 'react';
import { bindAll } from 'lodash';
import moment from 'moment';
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
      trainingOrganization: '',
      trainingDate: null,
      certificationDate: null,
      certificationFile: null,
      certificationOrganization: '', 
      phone: '',
      email: '',
    };

    bindAll(this, [
      'handleInputChange',
      'handleSelectChange',
      'handleTrainingDateChange',
      'handleCertificationDateChange',
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

  handleSelectChange(direction) {
    this.setState({
      direction
    });
  }


  handleTrainingDateChange(date) {
    this.setState({
      trainingDate: date
    });
  }

  handleCertificationDateChange(date) {
    this.setState({
      certificationDate: date
    });
  }

  handleFileChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      this.setState({
        certificationFile: file.thumbUrl
      });
    }
  }

  handleSubmit() {
    console.log(this.state);

    const {
      fullName,
      direction,
      trainingDate,
      trainingOrganization,
      certificationDate,
      certificationOrganization,
      phone,
      email
    } = this.state;

    this.props.registerAuditor([
      fullName,
      trainingOrganization,
      certificationOrganization,
      phone,
      email
    ]);
  }

  render() {
    const {
      fullName,
      direction,
      trainingDate,
      trainingOrganization,
      certificationDate,
      certificationOrganization,
      phone,
      email
    } =  this.state;

    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
    };

    return (
      <div className='RegisterAuditorForm'>
        <h2 className='Form__title'>Auditor Registration</h2>
        <Row>
          <Col span={6} />
          <Col span={12}>
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
                  <DatePicker
                    format="YYYY-MM-DD"
                    value={trainingDate}
                    onChange={this.handleTrainingDateChange}
                  />
                  <Input
                    className="Form__input"
                    size="large"
                    placeholder="Organization name"
                    name='trainingOrganization'
                    value={trainingOrganization}
                    onChange={this.handleInputChange}
                  />
                </div>
              </FormItem>
              <FormItem
                label="Certification document"
              >
                <div className="Form__inline">
                  <DatePicker
                    format="YYYY-MM-DD"
                    value={certificationDate}
                    onChange={this.handleCertificationDateChange}
                  />
                  <Input
                    className="Form__input"
                    size="large"
                    placeholder="Organization name"
                    name='certificationOrganization'
                    value={certificationOrganization}
                    onChange={this.handleInputChange}
                  />
                </div>
                <Upload {...props} name="certification" listType="picture" onChange={this.handleFileChange}>
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