import React, { Component } from 'react';
import { Link } from 'react-router'
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../../../index.css';
import './DashboardMenu.css';

class DashboardMenu extends Component {
  render() {
    const active = this.props.active || 1;
    return (
      <div className='DashboardMenu'>
        <Menu defaultSelectedKeys={[active]}>
          <Menu.Item style={{ fontSize: 14 }} key='1'>
            <Link to='dashboard'><Icon type="user" style={{ fontSize: 16 }} />Profile</Link>
          </Menu.Item>
          <Menu.Item style={{ fontSize: 14 }} key='2'>
            <Link to='apply'><Icon type="edit" style={{ fontSize: 16 }} />Apply now</Link>
          </Menu.Item>
          <Menu.Item style={{ fontSize: 14 }} key='3'>
            <Link to='projects'><Icon type="book" style={{ fontSize: 16 }} />Projects</Link>
          </Menu.Item>
          <Menu.Item style={{ fontSize: 14 }} key='4'>
            <Link to='wallet'><Icon type="wallet" style={{ fontSize: 16 }} />My wallet</Link>
          </Menu.Item>
          <Menu.Item style={{ fontSize: 14 }} key='5'>
            <Link to='settings'><Icon type="setting" style={{ fontSize: 16 }} />Settings</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default DashboardMenu;