import React, { Component } from 'react'
import { Link } from 'react-router'
import './App.css';

import { Layout, Menu, LocaleProvider, Button } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import PageFooter from './components/PageFooter/PageFooter';

const { Header, Content } = Layout;

const imageSrc = './img/logo.svg';

class App extends Component {
  
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <Layout className="layout">
          <Header>
            <Link to='/'>
              <div className="logo">
                <img src={imageSrc} alt="certchain"/>
                <div className='logo__text'>Blockchain Certification Network</div>
              </div> 
            </Link>
            <div className="right__menu">
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1"><Link to='manufacturers'>Manufacturer</Link></Menu.Item>
                <Menu.Item key="2"><Link to='auditors'>Auditor</Link></Menu.Item>
                <Menu.Item key="3"><Link to='certification-bodies'>Certification Body</Link></Menu.Item>
                <Menu.Item key="4"><Link to='dashboard'>Dashboard</Link></Menu.Item>
              </Menu>
              <div className="Button__group"> 
                <Link to='sign-up'>
                  <Button ghost>Sign Up</Button>
                </Link>
              {/* <Button type="primary">Log In</Button> */}
              </div> 
            </div>
          </Header>  
          <Content style={{ width: 1200, alignSelf: 'center', padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: '86vh' }}>
              {this.props.children}
            </div>
          </Content>
          <PageFooter />
        </Layout>
      </LocaleProvider>
    );
  }
}

export default App;
