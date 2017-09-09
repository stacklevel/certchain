import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterOrganForm from '../components/RegisterOrganForm/RegisterOrganForm';
import { registerOrgan } from '../actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  registerOrgan: bindActionCreators(registerOrgan, dispatch),
});

const RegisterOrganContainer = 
  connect(mapStateToProps, mapDispatchToProps)(RegisterOrganForm);

export default RegisterOrganContainer;
