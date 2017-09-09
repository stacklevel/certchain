import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home/Home';
import { getUser } from '../actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  getUser: bindActionCreators(getUser, dispatch),
});

const RegisterAuditorContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default RegisterAuditorContainer;
