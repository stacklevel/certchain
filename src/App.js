import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'
import './App.css';

import { Layout, Menu, LocaleProvider, Button } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
const { Header, Content, Footer } = Layout;


const imageSrc = './img/logo.svg';

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <Layout className="layout">
          <Header>
             <div className="logo">
              <img src={imageSrc} alt="certchain"/>
              <div className='logo__text'>Blockchain Certification Network</div>
            </div> 
            <div className="right__menu">
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['3']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1"><Link to='register-manufacturer'>Manufacturer</Link></Menu.Item>
                <Menu.Item key="2"><Link to='register-auditor'>Auditor</Link></Menu.Item>
                <Menu.Item key="3"><Link to='register-organ'>Certification Organ</Link></Menu.Item>
              </Menu>
               <div className="Button__group"> 
                <Button ghost>Sign Up</Button>
                <Button type="primary">Log In</Button>
               </div> 
            </div>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: '85vh' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Certchain.io ©2017
          </Footer>
        </Layout>
      </LocaleProvider>
    );
  }
}

export default App;
