import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuditorsListDemo from '../components/AuditorsListDemo/AuditorsListDemo';
import { getAllAuditors } from '../actions/';

const mapStateToProps = state => ({
  auditors: state.user.auditors,
});

const mapDispatchToProps = dispatch => ({
  getAllAuditors: bindActionCreators(getAllAuditors, dispatch),
});

const AuditorsListDemoContainer = 
  connect(mapStateToProps, mapDispatchToProps)(AuditorsListDemo);

export default AuditorsListDemoContainer;
