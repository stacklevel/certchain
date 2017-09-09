import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ApplyForm from '../components/ApplyForm/ApplyForm';
// import { createAccount } from '../actions/authActionCreators';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const ApplyContainer = 
  connect(mapStateToProps, mapDispatchToProps)(ApplyForm);

export default ApplyContainer;
