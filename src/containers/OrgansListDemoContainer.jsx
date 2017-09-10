import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrgansListDemo from '../components/OrgansListDemo/OrgansListDemo';
import { getAllOrgans } from '../actions/';

const mapStateToProps = state => ({
  organs: state.user.organs,
});

const mapDispatchToProps = dispatch => ({
  getAllOrgans: bindActionCreators(getAllOrgans, dispatch),
});

const OrgansListDemoContainer = 
  connect(mapStateToProps, mapDispatchToProps)(OrgansListDemo);

export default OrgansListDemoContainer;
