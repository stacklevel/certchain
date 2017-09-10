import React from 'react';
import { Table, Icon } from 'antd';
import './AuditorsListDemo.css';

class AuditorsListDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auditors: this.props.auditors || {},
    };

    this.columns = [
    {
      title: '№',
      dataIndex: 'number',
    },
    {
      title: 'Auditor',
      dataIndex: 'auditor',
    },
    {
      title: 'Education',
      dataIndex: 'education',
    },
    {
      title: 'Certification',
      dataIndex: 'certInfo',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];
  }

  componentWillReceiveProps(newProps) {
    if(this.props !== newProps) {
      this.setState({
        auditors: newProps.auditors,
      });
    }
  }

  componentWillMount() {
    this.props.getAllAuditors();
  }

  render() {
    const { auditors } = this.state;
    const columns = this.columns;
    const dataSource = [];

    Object.keys(auditors).forEach((key, index) => {
      const auditor = auditors[key];
      dataSource.push({
        number: index+1,
        auditor: auditor.name,
        education: auditor.education,
        certInfo: auditor.certInfo,
        phone: auditor.phoneNumber,
        email: auditor.email,
      });
    })

    return (
      <div>
        <h2 style={{textAlign: 'center', margin: '20px 0'}}>Auditors</h2>
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default AuditorsListDemo;