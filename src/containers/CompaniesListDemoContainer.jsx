import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CompaniesListDemo from '../components/CompaniesListDemo/CompaniesListDemo';
import { getAllManufacturers } from '../actions/';

const mapStateToProps = state => ({
  manufacturers: state.user.manufacturers,
});

const mapDispatchToProps = dispatch => ({
  getAllManufacturers: bindActionCreators(getAllManufacturers, dispatch),
});

const CompaniesListDemoContainer = 
  connect(mapStateToProps, mapDispatchToProps)(CompaniesListDemo);

export default CompaniesListDemoContainer;
