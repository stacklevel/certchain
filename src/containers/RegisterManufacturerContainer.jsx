import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterManufacturerForm from '../components/RegisterManufacturerForm/RegisterManufacturerForm';
// import { createAccount } from '../actions/authActionCreators';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const RegisterManufacturerContainer = 
// withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterManufacturerForm);
// );

export default RegisterManufacturerContainer;
