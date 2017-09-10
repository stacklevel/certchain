import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CompaniesListDemo from '../components/CompaniesListDemo/CompaniesListDemo';
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

const CompaniesListDemoContainer = 
  connect(mapStateToProps, mapDispatchToProps)(CompaniesListDemo);

export default CompaniesListDemoContainer;
