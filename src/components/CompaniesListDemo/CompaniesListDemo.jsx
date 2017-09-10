import React from 'react';
import { Table, Icon } from 'antd';
import './CompaniesListDemo.css';

class CompaniesListDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      manufacturers: this.props.manufacturers || {},
    };

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
  }

  componentWillReceiveProps(newProps) {
    if(this.props !== newProps) {
      this.setState({
        manufacturers: newProps.manufacturers,
      });
    }
  }

  componentWillMount() {
    this.props.getAllManufacturers();
  }

  render() {
    const { manufacturers } = this.state;
    const columns = this.columns;
    const dataSource = [];

    Object.keys(manufacturers).forEach((key, index) => {
      const manufaturer = manufacturers[key];
      dataSource.push({
        number: index+1,
        company: manufaturer.name,
        scope: manufaturer.scope,
        products: manufaturer.productsAndServices,
        address: manufaturer.legalAddress,
        bank: manufaturer.bankName,
        inn: manufaturer.uniqNumber,
        phone: manufaturer.phoneNumber,
        email: manufaturer.email,
      });
    })

    return (
      <div>
        <h2 style={{textAlign: 'center', margin: '20px 0'}}>Manufactures</h2>
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default CompaniesListDemo;