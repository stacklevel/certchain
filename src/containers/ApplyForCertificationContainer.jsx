import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ApplyForCertificationForm from '../components/ApplyForCertificationForm/ApplyForCertificationForm';
import { registerForCertification, getUser, getAllCertOrders, getAll } from '../actions/';

const mapStateToProps = state => ({
  userType: state.user.userType,
  certOrders: state.user.certOrders,
  manufacturers: state.user.manufacturers,
  auditors: state.user.auditors,
  currentUserAccount: state.user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  registerForCertification: bindActionCreators(registerForCertification, dispatch),
  getUser: bindActionCreators(getUser, dispatch),
  getAllCertOrders: bindActionCreators(getAllCertOrders, dispatch),
  getAll: bindActionCreators(getAll, dispatch),
});

const ApplyContainer = 
  connect(mapStateToProps, mapDispatchToProps)(ApplyForCertificationForm);

export default ApplyContainer;