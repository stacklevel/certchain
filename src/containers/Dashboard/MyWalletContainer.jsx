import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MyWallet from '../../components/Dashboard/MyWallet/MyWallet';
import { getAccountBalance } from '../../actions';

const mapStateToProps = state => ({
  accountBalance: state.user.accountBalance
});

const mapDispatchToProps = dispatch => ({
  getAccountBalance: bindActionCreators(getAccountBalance, dispatch),
});

const MyWalletContainer = 
  connect(mapStateToProps, mapDispatchToProps)(MyWallet);

export default MyWalletContainer;
