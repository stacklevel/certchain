import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ApplyForCertificationForm from '../../components/Dashboard/ApplyForCertificationForm/ApplyForCertificationForm';
import { setAuditorResolutionForCertification, applyForCertification, selectAuditorForCertification, registerForCertification, getUser, getAll } from '../../actions/';

const mapStateToProps = state => ({
  userType: state.user.userType,
  certOrders: state.user.certOrders,
  manufacturers: state.user.manufacturers,
  auditors: state.user.auditors,
  currentUserAccount: state.user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  registerForCertification: bindActionCreators(registerForCertification, dispatch),
  selectAuditorForCertification: bindActionCreators(selectAuditorForCertification, dispatch),
  applyForCertification: bindActionCreators(applyForCertification, dispatch),
  setAuditorResolutionForCertification: bindActionCreators(setAuditorResolutionForCertification, dispatch),
  getUser: bindActionCreators(getUser, dispatch),
  getAll: bindActionCreators(getAll, dispatch),
});

const ApplyContainer =
  connect(mapStateToProps, mapDispatchToProps)(ApplyForCertificationForm);

export default ApplyContainer;
