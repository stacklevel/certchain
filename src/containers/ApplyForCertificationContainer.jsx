import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ApplyForCertificationForm from '../components/ApplyForCertificationForm/ApplyForCertificationForm';
import { registerForCertification, getUser } from '../actions/';

const mapStateToProps = state => ({
  userType: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  registerForCertification: bindActionCreators(registerForCertification, dispatch),
  getUser: bindActionCreators(getUser, dispatch),
});

const ApplyContainer = 
  connect(mapStateToProps, mapDispatchToProps)(ApplyForCertificationForm);

export default ApplyContainer;
