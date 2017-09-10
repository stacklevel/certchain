import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterAuditorForm from '../components/RegisterAuditorForm/RegisterAuditorForm';
import { registerAuditor, getAllAuditors, approveAuditorTransaction } from '../actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  registerAuditor: bindActionCreators(registerAuditor, dispatch),
  getAllAuditors: bindActionCreators(getAllAuditors, dispatch),
  approveTransaction: bindActionCreators(approveAuditorTransaction, dispatch),
});

const RegisterAuditorContainer =
// withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterAuditorForm);
// );

export default RegisterAuditorContainer;
