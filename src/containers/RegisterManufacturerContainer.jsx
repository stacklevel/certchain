import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterManufacturerForm from '../components/RegisterManufacturerForm/RegisterManufacturerForm';
import { registerManufacturer } from '../actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  registerManufacturer: bindActionCreators(registerManufacturer, dispatch),
});

const RegisterManufacturerContainer = 
  connect(mapStateToProps, mapDispatchToProps)(RegisterManufacturerForm);

export default RegisterManufacturerContainer;
