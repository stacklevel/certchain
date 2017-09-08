import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterAuditorForm from '../components/RegisterAuditorForm/RegisterAuditorForm';
// import { createAccount } from '../actions/authActionCreators';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const RegisterAuditorContainer = 
// withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterAuditorForm);
// );

export default RegisterAuditorContainer;
