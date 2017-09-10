import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home/Home';
import { getUser, getAllOrgans, getAllManufacturers, getAllAuditors } from '../actions';
import AuditorsListDemoContainer from './AuditorsListDemoContainer';
import OrgansListDemoContainer from './OrgansListDemoContainer';
import CompaniesListDemoContainer from './CompaniesListDemoContainer';

const mapStateToProps = state => ({
   auditors: state.user.auditors,
   organs: state.user.organs,
   manufacturers: state.user.manufacturers,
});

const mapDispatchToProps = dispatch => ({
  getUser: bindActionCreators(getUser, dispatch),
  getAllOrgans: bindActionCreators(getAllOrgans, dispatch),
  getAllManufacturers: bindActionCreators(getAllManufacturers, dispatch),
  getAllAuditors: bindActionCreators(getAllAuditors, dispatch),
});

const RegisterAuditorContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default RegisterAuditorContainer;
