import React from 'react';
import { Table } from 'antd';

class CoursesTable extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        title: 'Period & duration',
        dataIndex: 'period',
        width: '15%'
      },
      {
        title: 'Subject',
        dataIndex: 'subject',
      },
      {
        title: 'Organized By',
        dataIndex: 'organizedBy',
      },
      {
        title: 'Recognized By (if applicable)',
        dataIndex: 'recognizedBy',
      },
    ];

    this.state = {
      dataSource: [
        {
          period: `October, 2015 (2 days)`,
          subject: `Technical Regulations of the Customs Union "TR TS 004/2011" On safety of low voltage equipment "TR TS 020/2011" Electromagnetic compatibility of technical means. "TR TS 010/2011" About safety of machinery and equipment. "Requirements and Conformity Assessment"`,
          organizedBy: `BGIPKiPK (Belarusian State Institute of advanced training and retraining of personnel for Standardization, Me-trology and Quality Management)`,
          recognizedBy: `BGIPKiPK (Belarusian State Institute of advanced training and retraining of personnel for Standardization, Me-trology and Quality Management)`,
        },
        {
          period: `October, 2015 (2 days)`,
          subject: `Technical Regulations of the Customs Union "TR TS 004/2011" On safety of low voltage equipment "TR TS 020/2011" Electromagnetic compatibility of technical means. "TR TS 010/2011" About safety of machinery and equipment. "Requirements and Conformity Assessment"`,
          organizedBy: `BGIPKiPK (Belarusian State Institute of advanced training and retraining of personnel for Standardization, Me-trology and Quality Management)`,
          recognizedBy: `BGIPKiPK (Belarusian State Institute of advanced training and retraining of personnel for Standardization, Me-trology and Quality Management)`,
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

export default CoursesTable;