import React from 'react';
import { Table } from 'antd';
import './OrgansListDemo.css';

class OrgansListDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      organs: this.props.organs || {},
    };

    this.columns = [
    {
      title: '№',
      dataIndex: 'number',
    },
    {
      title: 'Certification Body',
      dataIndex: 'organ',
    },
    {
      title: 'Address',
      dataIndex: 'addr',
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
        organs: newProps.organs,
      });
    }
  }

  componentWillMount() {
    this.props.getAllOrgans();
  }

  render() {
    const { organs } = this.state;
    const columns = this.columns;
    const dataSource = [];

    Object.keys(organs).forEach((key, index) => {
      const organ = organs[key];
      dataSource.push({
        number: index+1,
        organ: organ.name,
        addr: organ.addr,
        phone: organ.phoneNumber,
        email: organ.email,
      });
    })

    return (
      <div>
        <h2 style={{textAlign: 'center', margin: '20px 0'}}>Certification Bodies</h2>
        <Table bordered dataSource={dataSource} columns={columns}
          pagination={this.props.pagination} />
      </div>
    );
  }
}

export default OrgansListDemo;