import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterAuditorForm from '../components/RegisterAuditorForm/RegisterAuditorForm';
import { registerAuditor } from '../actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  registerAuditor: bindActionCreators(registerAuditor, dispatch),
});

const RegisterAuditorContainer = 
// withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterAuditorForm);
// );

export default RegisterAuditorContainer;
