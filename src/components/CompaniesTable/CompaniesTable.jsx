import React from 'react';
import { Table, Icon } from 'antd';
import './CompaniesTable.css';

class CompaniesTable extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
    {
      title: 'Rating',
      dataIndex: 'rating',
    },
    {
      title: 'Company',
      dataIndex: 'company',
    },
    {
      title: 'Application Date',
      dataIndex: 'applicationDate',
    },
    {
      title: 'Audit Date',
      dataIndex: 'auditDate',
    },
    {
      title: 'Standard',
      dataIndex: 'standard',
    },
    {
      title: 'Audit',
      dataIndex: 'audit',
    },
    {
      title: 'Certification Body',
      dataIndex: 'certificationBody',
    },
    {
      title: 'Number of Discrepancies',
      dataIndex: 'numberOfDiscrepancies',
    },
    {
      title: 'Consultant',
      dataIndex: 'consultant',
    },
    {
      title: 'Decision',
      dataIndex: 'decision',
      render: (text, record) => 
        {
          return text ? (
            <div className='icon-block'>
              <Icon type="check-circle" style={{ fontSize: 16, color: '#3dbd7d' }}/>
            </div>
          ) : (
            <div className='icon-block'>
              <Icon type="close-circle" style={{ fontSize: 16, color: '#f04134' }}/>
            </div>
          )
        },
    }
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

export default CompaniesTable;