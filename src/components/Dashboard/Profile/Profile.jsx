import React, { Component } from 'react';
import ManufacturerProfile from '../ManufacturerProfile/ManufacturerProfile';
import AuditorProfile from '../AuditorProfile/AuditorProfile';
import OrganProfile from '../OrganProfile/OrganProfile';
import 'antd/dist/antd.css';
import '../../../index.css';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    this.props.getUser();
  }

  render() {
    const userType = this.props.userType;

    return (
      <div className='Profile'>
        { userType === 'manufacturer' && (<ManufacturerProfile />) }
        { userType === 'auditor' && (<AuditorProfile />) }
        { userType === 'organ' && (<OrganProfile />) }
      </div>
    );
  }
}

export default Profile;