import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DashboardForm from '../components/DashboardForm/DashboardForm';
// import { createAccount } from '../actions/authActionCreators';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const DashboardContainer = 
// withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DashboardForm);
// );

export default DashboardContainer;
