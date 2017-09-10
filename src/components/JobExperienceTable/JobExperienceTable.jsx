import React from 'react';
import { Table } from 'antd';

class JobExperienceTable extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        title: 'Period',
        dataIndex: 'period',
        width: '15%'
      },
      {
        title: 'Subject',
        dataIndex: 'subject',
        width: '15%'
      },
      {
        title: 'Activity Field',
        dataIndex: 'activity',
        width: '15%'
      },
      {
        title: 'Related IAF EA code',
        dataIndex: 'relatedCode',
        width: '10%'
      },
      {
        title: 'Position Held',
        dataIndex: 'positionHeld',
        width: '15%'
      },
      {
        title: 'Roles & responsibilities',
        dataIndex: 'roles',
        width: '30%'
      },
    ];

    this.state = {
      dataSource: [
        {
          period: `Aug. 2015 - Present`,
          subject: 'Easy Standart LLC, Minsk',
          activity: 'Management Systems',
          relatedCode: '',
          positionHeld: 'Certification Engineer',
          roles: `1. Research and analysis of the technical features of the products, the technological features of its production and the possible risks associated with its use and operation.
2. Participation in projects to assess product compliance with technical regulations, standards and directives.                                3. Audits of quality management systems in according to to ISO 9001`,
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

export default JobExperienceTable;