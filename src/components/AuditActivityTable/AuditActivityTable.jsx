import React from 'react';
import { Table } from 'antd';

class AuditActivityTable extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        width: '15%'
      },
      {
        title: 'Company',
        dataIndex: 'company',
        width: '15%'
      },
      {
        title: 'Type of Audite',
        dataIndex: 'auditeType',
      },
      {
        title: 'Eacode set:',
        dataIndex: 'eacodeSet',
        children: [
          {
            title: 'EA 1',
            dataIndex: 'ea1',
          },
          {
            title: 'EA 2',
            dataIndex: 'ea2',
          },
          {
            title: 'EA 3',
            dataIndex: 'ea3',
          },
        ]
      },
      {
        title: 'Total MANDAY',
        dataIndex: 'total',
      },
      {
        title: 'Standart Scheme',
        dataIndex: 'scheme',
        width: '30%',
        children: [
          {
            title: 'ISO 9001',
            dataIndex: 'iso9001',
          },
          {
            title: 'ISO 9001',
            dataIndex: 'iso9002',
          },
          {
            title: 'ISO 9001',
            dataIndex: 'iso9003',
          },
          {
            title: 'ISO 9001',
            dataIndex: 'iso9004',
          },
        ]
      },
    ];

    this.state = {
      dataSource: [
        {
          date: 'Aug. 2015 - Present',
          company: 'Limited Liability Company "KG Proect "',
          auditeType: 'Certification',
          eacodeSet: {
            ea1: '28',
            ea2: '',
            ea3: ''
          },
          total: '45',
          scheme: {
            iso9001: '',
            iso9002: '',
            iso9003: '',
            iso9004: '',
          }
        },
       ],
      count: 2,
    };
  }

  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Table bordered pagination={false} dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default AuditActivityTable;