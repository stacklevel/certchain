import React from 'react';
import { Table, Icon } from 'antd';
import './CompaniesListDemo.css';

class CompaniesListDemo extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
    {
      title: '№',
      dataIndex: 'number',
    },
    {
      title: 'Company',
      dataIndex: 'company',
    },
    {
      title: 'Scope',
      dataIndex: 'scope',
    },
    {
      title: 'Products and Services',
      dataIndex: 'products',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
    },
    {
      title: 'INN',
      dataIndex: 'inn',
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

    this.state = {
      dataSource: [
        {
          rating: '99%',
          company: 'Blockchain Certification Network',
          applicationDate: '26.08.2017',
          auditDate: '30.08.2017',
          standard: 'ISO 9001-2015',
          audit: 'Fanny Gonzales',
          certificationBody: 'SGS',
          numberOfDiscrepancies: '10',
          consultant: 'Easystandart',
          decision: true,
        },
        {
          rating: '99%',
          company: 'Blockchain Certification Network',
          applicationDate: '26.08.2017',
          auditDate: '30.08.2017',
          standard: 'ISO 9001-2015',
          audit: 'Fanny Gonzales',
          certificationBody: 'SGS',
          numberOfDiscrepancies: '10',
          consultant: 'Easystandart',
          decision: true,
        },
        {
          rating: '99%',
          company: 'Blockchain Certification Network',
          applicationDate: '26.08.2017',
          auditDate: '30.08.2017',
          standard: 'ISO 9001-2015',
          audit: 'Fanny Gonzales',
          certificationBody: 'SGS',
          numberOfDiscrepancies: '10',
          consultant: 'Easystandart',
          decision: false,
        },
        {
          rating: '99%',
          company: 'Blockchain Certification Network',
          applicationDate: '26.08.2017',
          auditDate: '30.08.2017',
          standard: 'ISO 9001-2015',
          audit: 'Fanny Gonzales',
          certificationBody: 'SGS',
          numberOfDiscrepancies: '10',
          consultant: 'Easystandart',
          decision: false,
        }],
      count: 2,
    };
  }

  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default CompaniesListDemo;