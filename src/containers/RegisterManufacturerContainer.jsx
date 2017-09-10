import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterManufacturerForm from '../components/RegisterManufacturerForm/RegisterManufacturerForm';
import { registerManufacturer, getAllManufacturers, approveManufacturerTransaction } from '../actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  registerManufacturer: bindActionCreators(registerManufacturer, dispatch),
  getAllManufacturers: bindActionCreators(getAllManufacturers, dispatch),
  approveTransaction: bindActionCreators(approveManufacturerTransaction, dispatch)
});

const RegisterManufacturerContainer =
  connect(mapStateToProps, mapDispatchToProps)(RegisterManufacturerForm);

export default RegisterManufacturerContainer;
