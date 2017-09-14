import React, { Component } from 'react'
import { Link } from 'react-router';
import './PageFooter.css';

import { Layout, Row, Col } from 'antd';
const { Footer } = Layout;

class PageFooter extends Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }} className='PageFooter'>
        <div className='PageFooter__container'>
          <Row className="PageFooter__main-block">
            <Col span='6'>
              <div className="PageFooter__main-title">CONTACT US</div>
              <div className="PageFooter__contact-block">
                <div className="PageFooter__white-text">Address:</div>
                <div className="PageFooter__grey-text">Minsk, 1a Stoletova Street</div>
              </div>
              <div className="PageFooter__contact-block">
                <div className="PageFooter__white-text">E-mail:</div>
                <a href='mailto:info@certchain.io' className="PageFooter__grey-text">info@certchain.io</a>
              </div>
            </Col>
            <Col span='1'></Col>
            <Col span='5'>
              <div className="PageFooter__main-title">PHONE</div>
              <div className="PageFooter__phones-block">
                <div className="PageFooter__phone-text"><span>BY</span> +375 17 388-60-17</div>
                <div className="PageFooter__phone-text"><span>UA</span> +380 44 392-72-09</div>
                <div className="PageFooter__phone-text"><span>RU</span> +7 499 112-08-66</div>
                <div className="PageFooter__phone-text"><span>KZ</span> +7 727 350-53-43</div>
                <div className="PageFooter__phone-text"><span>LT</span> +370 520-785-27</div>
                <div className="PageFooter__phone-text"><span>LV</span> +371 676-511-88</div>
              </div>
            </Col>
            <Col span='6'>
              <div className="PageFooter__main-title PageFooter__main-title--center">FOLLOW US</div>
              <div className="PageFooter__icons-block">
                <Link to='https://facebook.com'><img src="img/fb.svg" alt='fb'/></Link>
                <Link to='https://facebook.com'><img src="img/inst.svg" alt='inst'/></Link>
                <Link to='https://facebook.com'><img src="img/sl.svg" alt='sl'/></Link>
                <Link to='https://facebook.com'><img src="img/golos.svg" alt='golos'/></Link>
              </div>
              <div className="PageFooter__icons-block">
                <Link to='https://facebook.com'><img src="img/fb.svg" alt='fb'/></Link>
                <Link to='https://facebook.com'><img src="img/in.svg" alt='in'/></Link>
                <Link to='https://facebook.com'><img src="img/telegram.svg" alt='telegram'/></Link>
              </div>
            </Col>
            <Col span='1'></Col>
            <Col span='5'>
              <div className="PageFooter__main-title">FOLLOW US</div>
              <div className="PageFooter__about-text">
                Let’s cooperate right now. We will be glad to provide you with all necessary information.
              </div>
            </Col>
          </Row>
        </div>
        <Row className="PageFooter__copyright">
          <div className="PageFooter__copyright-text">
            <p>© 2017 CentrChain</p>
          </div>
        </Row>
      </Footer>
    );
  }
}

export default PageFooter;
