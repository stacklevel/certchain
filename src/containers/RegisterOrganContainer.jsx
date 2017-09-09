import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterOrganForm from '../components/RegisterOrganForm/RegisterOrganForm';
// import { createAccount } from '../actions/authActionCreators';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const RegisterOrganContainer = 
  connect(mapStateToProps, mapDispatchToProps)(RegisterOrganForm);

export default RegisterOrganContainer;
