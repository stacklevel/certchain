import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from '../../components/Dashboard/Profile/Profile';
import { getUser } from '../../actions';

const mapStateToProps = state => ({
  userType: state.user.userType,
});

const mapDispatchToProps = dispatch => ({
  getUser: bindActionCreators(getUser, dispatch),
});

const ProfileContainer = 
  connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
